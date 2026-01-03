import { OpenAITranscriptionAdapter } from '../dist/index.js';

if (!OpenAITranscriptionAdapter) {
  console.error('❌ OpenAITranscriptionAdapter not exported');
  process.exit(1);
}

console.log('✅ openspec-audio smoke test passed');
