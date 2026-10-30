/**
 * Vintage Web Audio Synthesizer
 * Generates tactile letterpress clicks, telegraph Morse beeps, and split-flap mechanical clacks.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function getSoundEnabled(): boolean {
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('vintage_sound_enabled', enabled ? 'true' : 'false');
    } catch {
      // Ignore localStorage errors
    }
  }
}

// Initialize sound setting
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('vintage_sound_enabled');
    if (saved !== null) {
      soundEnabled = saved === 'true';
    }
  } catch {
    soundEnabled = true;
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play an authentic 750Hz Marconi telegraph carrier tone
 */
export function playTelegraphTone(durationMs = 90, frequency = 780): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    // Fast attack and smooth envelope to avoid harsh popping
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.005);
    gain.gain.setValueAtTime(0.12, now + durationMs / 1000 - 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durationMs / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + durationMs / 1000);
  } catch {
    // Ignore audio playback errors
  }
}

/**
 * Play a mechanical solenoid flip / typewriter clack
 */
export function playSolenoidClack(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    
    // Short burst of filtered noise
    const bufferSize = ctx.sampleRate * 0.035; // 35ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.035);
  } catch {
    // Silent fail
  }
}

/**
 * Play a deep letterpress ink-stamp thud
 */
export function playStampThud(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  } catch {
    // Silent fail
  }
}

/**
 * Morse Code Dictionary
 */
export const MORSE_MAP: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': ' / '
};

export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(c => MORSE_MAP[c] || c)
    .join(' ');
}
