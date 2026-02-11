import fs from "node:fs";
import OpenAI from "openai";
import {
  type AudioInput,
  type AudioTranscriptionAdapter,
  type TranscriptionOptions,
  type Transcript,
  makeTranscriptId,
  makeLanguageTag,
} from "../index";

export class OpenAITranscriptionAdapter implements AudioTranscriptionAdapter {
  public readonly id = "openai.transcribe";
  private readonly client: OpenAI;

  constructor(apiKey?: string) {
    const key = apiKey ?? process.env.OPENAI_API_KEY;
    if (!key) throw new Error("Missing OPENAI_API_KEY");
    this.client = new OpenAI({ apiKey: key });
  }

  async transcribe(audio: AudioInput, options: TranscriptionOptions = {}): Promise<Transcript> {
    const model = options.model ?? "whisper-1";
    const format = options.format ?? "text";
    const language = options.language ?? "auto";

    const file = fs.createReadStream(audio.path);

    const res =
      format === "json"
        ? await this.client.audio.transcriptions.create({
            file: file as any,
            model,
            language: language === "auto" ? undefined : String(language),
            prompt: options.prompt,
            response_format: "verbose_json",
          })
        : await this.client.audio.transcriptions.create({
            file: file as any,
            model,
            language: language === "auto" ? undefined : String(language),
            prompt: options.prompt,
            response_format: "text",
          });

    if (typeof res === "string") {
      return {
        id: makeTranscriptId(`tr_${Date.now()}`),
        text: res,
        language: language === "auto" ? undefined : makeLanguageTag(String(language)),
        provider: { id: "openai", model },
      };
    }

    const text = (res as any).text ?? "";
    const lang = (res as any).language ? makeLanguageTag(String((res as any).language)) : undefined;

    const segments = Array.isArray((res as any).segments)
      ? (res as any).segments.map((s: any) => ({
          startMs: typeof s.start === "number" ? Math.round(s.start * 1000) : undefined,
          endMs: typeof s.end === "number" ? Math.round(s.end * 1000) : undefined,
          text: String(s.text ?? ""),
        }))
      : undefined;

    return {
      id: makeTranscriptId(`tr_${Date.now()}`),
      text,
      language: lang,
      segments,
      provider: { id: "openai", model },
      ext: { raw: res as any },
    };
  }
}
