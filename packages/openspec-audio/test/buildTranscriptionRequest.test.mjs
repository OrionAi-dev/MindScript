import test from 'node:test';
import assert from 'node:assert/strict';

import { buildTranscriptionRequest } from '../dist/index.js';

test('defaults model when not provided', () => {
  const req = buildTranscriptionRequest({ kind: 'path', path: '/tmp/audio.mp3' });
  assert.equal(req.model, 'gpt-4o-mini-transcribe');
});

test('passes language through unchanged', () => {
  const req = buildTranscriptionRequest(
    { kind: 'bytes', bytes: new Uint8Array([1,2,3]), filename: 'a.wav' },
    { language: 'en' }
  );
  assert.equal(req.language, 'en');
  assert.equal(req.audio.kind, 'bytes');
});
