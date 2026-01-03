import type { JsonValue, ISODateTime } from "@mindscript/openspec-types";

/**
 * OpenSpec Audio (public, stable, boring)
 * --------------------------------------
 * Defines vendor-neutral audio + transcription contracts.
 *
 * Private repos implement:
 * - Whisper (API or local)
 * - Other ASR providers
 * - Diarization, alignment, enrichment
 */

/* ---------- Branded IDs ---------- */
export type AudioId = string & { readonly __brand: "AudioId" };
export type TranscriptId = string & { readonly __brand: "TranscriptId" };
export type LanguageTag = string & { readonly __brand: "LanguageTag" };

/* ---------- Audio Input ---------- */
export interface AudioInput {
  id?: AudioId;
  kind: string; // "file" | "bytes" | "url" | "stream" | ...

  path?: string;
  url?: string;
  bytes?: Uint8Array;

  mimeType?: string;
  durationMs?: number;

  ext?: Record<string, JsonValue>;
}

/* ---------- Transcription Options ---------- */
export interface TranscriptionOptions {
  language?: LanguageTag;
  diarization?: boolean;
  wordTimestamps?: boolean;
  segmentTimestamps?: boolean;
  prompt?: string;

  ext?: Record<string, JsonValue>;
}

/* ---------- Timing ---------- */
export interface WordTiming {
  text: string;
  startMs?: number;
  endMs?: number;
  confidence?: number;
  ext?: Record<string, JsonValue>;
}

export interface Segment {
  text: string;
  startMs?: number;
  endMs?: number;
  speaker?: string;
  confidence?: number;
  words?: ReadonlyArray<WordTiming>;
  ext?: Record<string, JsonValue>;
}

/* ---------- Transcript ---------- */
export interface Transcript {
  id: TranscriptId;
  createdAt: ISODateTime;

  audio: AudioInput;

  text: string;
  language?: LanguageTag;

  segments?: ReadonlyArray<Segment>;

  model?: {
    id?: string;
    version?: string;
    ext?: Record<string, JsonValue>;
  };

  rawRef?: {
    kind: string;
    ref: string;
    checksum?: string;
  };

  confidence?: number;
  rationale?: string;

  ext?: Record<string, JsonValue>;
}

/* ---------- Adapter Interface ---------- */
export interface AudioTranscriptionAdapter {
  id: string; // generic, e.g. "transcription.adapter"
  transcribe(
    audio: AudioInput,
    options?: TranscriptionOptions
  ): Promise<Transcript>;
}

/* ---------- Helpers ---------- */
export function makeAudioId(s: string): AudioId {
  return s as AudioId;
}
export function makeTranscriptId(s: string): TranscriptId {
  return s as TranscriptId;
}
export function makeLanguageTag(s: string): LanguageTag {
  return s as LanguageTag;
}
