import React, { useState, useEffect, useRef } from 'react';
import { playSolenoidClack } from '../utils/vintageAudio';

interface SplitFlapBoardProps {
  words?: string[];
  autoCycle?: boolean;
  cycleIntervalMs?: number;
  onCycle?: (newWord: string) => void;
  className?: string;
}

const DEFAULT_WORDS = [
  "ZAIN JAWAD",
  "AGENTIC AI",
  "AIFI CLUB ",
  "FULL-STACK",
  "IOT BUILD ",
  "RESILIENT ",
  "PRECISION "
];

export const SplitFlapBoard: React.FC<SplitFlapBoardProps> = ({
  words = DEFAULT_WORDS,
  autoCycle = true,
  cycleIntervalMs = 7000,
  onCycle,
  className = ""
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const targetWord = words[wordIndex].padEnd(10, ' ').slice(0, 10);

  useEffect(() => {
    setDisplayChars(targetWord.split(''));
  }, []);

  const cycleToNextWord = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    playSolenoidClack();

    const nextIndex = (wordIndex + 1) % words.length;
    setWordIndex(nextIndex);
    const newWord = words[nextIndex].padEnd(10, ' ').slice(0, 10);
    const targetArr = newWord.split('');

    if (onCycle) onCycle(newWord);

    // Mechanical flip rolling effect across the character tiles
    let step = 0;
    const maxSteps = 14;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-· ";

    const rollInterval = window.setInterval(() => {
      step++;
      if (step % 2 === 0) {
        playSolenoidClack();
      }

      setDisplayChars(prev => {
        return targetArr.map((targetChar, idx) => {
          if (step > 4 + idx) {
            return targetChar;
          }
          return alphabet[Math.floor(Math.random() * alphabet.length)];
        });
      });

      if (step >= maxSteps) {
        clearInterval(rollInterval);
        setDisplayChars(targetArr);
        setIsFlipping(false);
      }
    }, 55);
  };

  useEffect(() => {
    if (!autoCycle) return;
    intervalRef.current = window.setInterval(() => {
      cycleToNextWord();
    }, cycleIntervalMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [wordIndex, autoCycle, isFlipping]);

  return (
    <div
      onClick={cycleToNextWord}
      className={`bg-ink-deep p-3 sm:p-4 rounded-none border-2 border-ink-black shadow-[ inset_2px_2px_0_rgba(0,0,0,0.6)] cursor-pointer select-none transition-transform hover:scale-[1.008] active:scale-[0.99] group ${className}`}
      title="Click Solenoid to Cycle Telemetry Readout"
    >
      <div className="flex items-center justify-between mb-2 pb-1 border-b border-paper-aged/30 font-mono text-[10px] text-paper-muted uppercase tracking-widest">
        <span className="flex items-center gap-1.5 text-crt-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-stamp-red animate-pulse"></span>
          SOLENOID READOUT • DEPOT 402
        </span>
        <span className="group-hover:text-peach-highlight text-paper-muted/80 transition-colors">
          [CLICK TO CYCLE ↺]
        </span>
      </div>

      {/* Tiles Track */}
      <div className="flex items-center justify-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
        {displayChars.map((char, idx) => (
          <div
            key={idx}
            className="w-7 sm:w-10 h-10 sm:h-14 bg-ink-black border border-ink-deep flex flex-col relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.5)] shrink-0"
          >
            {/* Top Half */}
            <div className="h-1/2 w-full bg-stamp-red flex items-end justify-center overflow-hidden border-b border-ink-deep/80 relative">
              <span className="font-serif text-sm sm:text-xl text-paper-base leading-none translate-y-2 font-bold select-none tracking-tight">
                {char === ' ' ? '·' : char}
              </span>
              <span className="absolute top-0.5 right-0.5 text-[8px] text-paper-base/40 font-mono leading-none">
                {idx + 1}
              </span>
            </div>

            {/* Bottom Half */}
            <div className="h-1/2 w-full bg-brick-red flex items-start justify-center overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
              <span className="font-serif text-sm sm:text-xl text-paper-base leading-none -translate-y-2 font-bold select-none tracking-tight">
                {char === ' ' ? '·' : char}
              </span>
            </div>

            {/* Split Hinge Shadow & Specular Bevel */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/90 z-10"></div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"></div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2 pt-1 border-t border-paper-aged/20 text-[9px] font-mono text-paper-muted uppercase tracking-wider">
        <span className="text-brass-gold font-bold">PULSE: 60 HZ MECHANICAL</span>
        <span className="text-paper-muted">SOLENOID #{wordIndex + 1} OF {words.length}</span>
      </div>
    </div>
  );
};
