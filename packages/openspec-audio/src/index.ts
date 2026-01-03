import type { JsonValue } from "@mindscript/openspec-types";

/** ---------- Strong-ish IDs (branded strings) ---------- */
export type AudioId = string & { __brand: "AudioId" };
export type TranscriptId = string & { __brand: "TranscriptId" };
export type LanguageTag = string & { __brand: "LanguageTag" };

/** ---------- Inputs ---------- */
export type AudioInput = {
  kind: "path";
  /** absolute or relative path */
  path: string;
  /** optional mime hint */
  mime?: string;
};

/** ---------- Options ---------- */
export interface TranscriptionOptions {
  /**
   * "auto" lets provider detect language; otherwise a BCP-47 tag like "en", "es", "pt-BR"
   */
  language?: "auto" | LanguageTag;

  /** Provider-specific model name */
  model?: string;

  /** Optional prompt/context */
  prompt?: string;

  /** Output format preference */
  format?: "text" | "json";

  /** Provider-specific extension */
  ext?: Record<string, JsonValue>;
}

/** ---------- Transcript ---------- */
export interface TranscriptSegment {
  startMs?: number;
  endMs?: number;
  text: string;
  confidence?: number;
  ext?: Record<string, JsonValue>;
}

export interface Transcript {
  id: TranscriptId;
  audioId?: AudioId;

  text: string;
  language?: LanguageTag;

  segments?: TranscriptSegment[];

  provider: {
    id: string;     // e.g. "openai"
    model?: string; // e.g. "whisper-1"
    requestId?: string;
  };

  confidence?: number;
  rationale?: string;

  ext?: Record<string, JsonValue>;
}

/** ---------- Adapter Interface ---------- */
export interface AudioTranscriptionAdapter {
  id: string; // e.g. "openai.transcribe"
  transcribe(audio: AudioInput, options?: TranscriptionOptions): Promise<Transcript>;
}

/** ---------- Helpers ---------- */
export function makeAudioId(s: string): AudioId {
  return s as AudioId;
}
export function makeTranscriptId(s: string): TranscriptId {
  return s as TranscriptId;
}
export function makeLanguageTag(s: string): LanguageTag {
  return s as LanguageTag;
}

export * from "./adapters/openai";
