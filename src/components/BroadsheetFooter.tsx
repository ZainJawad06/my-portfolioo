import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playTelegraphTone } from '../utils/vintageAudio';

interface BroadsheetFooterProps {
  onNavigateTab: (tab: 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials') => void;
}

export const BroadsheetFooter: React.FC<BroadsheetFooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="w-full bg-paper-base text-ink-deep border-t-4 border-ink-deep mt-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main publication info */}
          <div className="flex flex-col gap-3 md:col-span-2">
            <span className="font-serif text-2xl uppercase tracking-tight text-ink-deep font-bold">
              The Official Gazette &amp; Broadsheet
            </span>
            <p className="font-mono text-xs text-on-surface-variant max-w-md leading-relaxed">
              Printed and published at the mechanical telegraph rotary house. Devoted to agentic workflows, embedded IoT telemetry, full-stack architectures, and AI community leadership directed by {PORTFOLIO_DATA.name}, Vice President of AiFi Club @ REVA University.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="bg-stamp-red text-paper-base px-2.5 py-1 font-mono text-[10px] tracking-widest font-bold uppercase shadow-stamp">
                REGISTERED DISPATCH #1900-B
              </span>
              <span className="font-mono text-[10px] text-secondary uppercase font-bold">
                CABLE CODE: JAWAD-SYS
              </span>
            </div>
          </div>

          {/* Gazette Departments */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-ink-deep font-bold border-b border-ink-deep/20 pb-1">
              Gazette Editions
            </span>
            <button
              onClick={() => {
                playTelegraphTone(40, 700);
                onNavigateTab('the-gazette');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-on-surface-variant hover:text-stamp-red transition-colors cursor-pointer"
            >
              • The Frontispiece Gazette
            </button>
            <button
              onClick={() => {
                playTelegraphTone(40, 700);
                onNavigateTab('dispatches');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-on-surface-variant hover:text-stamp-red transition-colors cursor-pointer"
            >
              • Industrial Patents Reel (5 Works)
            </button>
            <button
              onClick={() => {
                playTelegraphTone(40, 700);
                onNavigateTab('chronicle');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-on-surface-variant hover:text-stamp-red transition-colors cursor-pointer"
            >
              • AiFi Guild Chronicle &amp; Dogmas
            </button>
            <button
              onClick={() => {
                playTelegraphTone(40, 700);
                onNavigateTab('manual');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-on-surface-variant hover:text-stamp-red transition-colors cursor-pointer"
            >
              • Technical Field Manual &amp; Stack
            </button>
            <button
              onClick={() => {
                playTelegraphTone(40, 700);
                onNavigateTab('credentials');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-on-surface-variant hover:text-stamp-red transition-colors cursor-pointer"
            >
              • Credentials Ledger &amp; Wire
            </button>
          </div>

          {/* Telegraph Inquiries */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-ink-deep font-bold border-b border-ink-deep/20 pb-1">
              Telegraph Terminal
            </span>
            <span className="text-on-surface-variant">Depot: Bengaluru Central Exchange</span>
            <span className="text-on-surface-variant">Office of the Vice President</span>
            <span className="text-stamp-red font-bold">zainjawad@gmail.com</span>
            <span className="text-brick-red font-bold text-[10px] mt-1 uppercase">
              TRANSATLANTIC CABLE OPERATIONAL
            </span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 pt-4 border-t-2 border-ink-deep flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-mono text-[10px] uppercase tracking-widest gap-2">
          <div>
            <span>Anno Domini MCM—MMXXVI • Mohammed Zain Jawad • All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Typeset in Newsreader &amp; Courier Prime</span>
            <span>•</span>
            <span className="text-stamp-red font-bold">Letterpress Rotary Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
