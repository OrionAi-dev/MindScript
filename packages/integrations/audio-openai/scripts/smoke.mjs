import {
  OpenAITranscriptionAdapter,
  makeAudioId,
  makeTranscriptId,
  makeLanguageTag,
} from '../dist/index.js';

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`✅ ${msg}`);
}

// --- Export checks ---
if (!OpenAITranscriptionAdapter) fail('OpenAITranscriptionAdapter not exported');
ok('OpenAITranscriptionAdapter exported');

if (typeof makeAudioId !== 'function') fail('makeAudioId not exported / not a function');
if (typeof makeTranscriptId !== 'function') fail('makeTranscriptId not exported / not a function');
if (typeof makeLanguageTag !== 'function') fail('makeLanguageTag not exported / not a function');
ok('id helper exports present');

// --- Shape checks (duck-typing) ---
// We don’t call the network. We just assert the adapter has the expected interface.
let adapter;
try {
  // If your constructor requires args, this will throw; that’s fine — we’ll fall back to prototype checks.
  adapter = new OpenAITranscriptionAdapter({});
} catch {
  adapter = null;
}

// Instance or prototype checks
const proto = OpenAITranscriptionAdapter?.prototype;
const hasId =
  (adapter && typeof adapter.id === 'string' && adapter.id.length > 0) ||
  (proto && Object.getOwnPropertyDescriptor(proto, 'id')) ||
  (proto && typeof proto.id === 'string');

if (!hasId) fail('Adapter is missing an "id" (string)');

const hasTranscribe =
  (adapter && typeof adapter.transcribe === 'function') ||
  (proto && typeof proto.transcribe === 'function');

if (!hasTranscribe) fail('Adapter is missing a "transcribe(audio, options?)" method');

ok('adapter surface area looks correct');

// --- Sanity: helper brands round-trip as strings (no runtime changes expected)
const a = makeAudioId('audio:test');
const t = makeTranscriptId('transcript:test');
const l = makeLanguageTag('en-US');

if (typeof a !== 'string') fail('makeAudioId did not return a string at runtime');
if (typeof t !== 'string') fail('makeTranscriptId did not return a string at runtime');
if (typeof l !== 'string') fail('makeLanguageTag did not return a string at runtime');

ok('helper runtime sanity passed');

console.log('✅ integration-audio-openai interface smoke test passed');
