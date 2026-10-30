import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { getSoundEnabled, setSoundEnabled, playTelegraphTone } from '../utils/vintageAudio';

export type PageTab = 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials';

interface BroadsheetHeaderProps {
  activeTab: PageTab;
  onTabChange: (tab: PageTab) => void;
  soundActive: boolean;
  onToggleSound: () => void;
  grainActive: boolean;
  onToggleGrain: () => void;
}

export const BroadsheetHeader: React.FC<BroadsheetHeaderProps> = ({
  activeTab,
  onTabChange,
  soundActive,
  onToggleSound,
  grainActive,
  onToggleGrain
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageTab; label: string; issue: string }[] = [
    { id: 'the-gazette', label: 'The Gazette', issue: 'Frontispiece' },
    { id: 'dispatches', label: 'Dispatches', issue: 'Patented Works' },
    { id: 'chronicle', label: 'Chronicle', issue: 'Guild & AiFi' },
    { id: 'manual', label: 'Manual', issue: 'Tech & Stack' },
    { id: 'credentials', label: 'Credentials', issue: 'Ledger & Wire' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper-base border-b-4 border-ink-deep shadow-[0_4px_16px_rgba(22,18,15,0.15)] transition-all">
      {/* Real-time Scrub-Scroll Morse Needle Progress Indicator */}
      <div className="w-full h-1.5 bg-paper-muted relative overflow-hidden border-b border-ink-deep/30">
        <div
          className="h-full bg-stamp-red transition-all duration-75 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Scribe Needle Pin */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-brass-gold shadow-sm"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 pt-1.5 pb-2">
        {/* Tier 1: Micro Cablegram & Editorial Masthead Line */}
        <div className="flex items-center justify-between text-on-surface-variant font-mono text-[10px] sm:text-xs uppercase tracking-widest pb-1 border-b border-ink-deep/20">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="bg-stamp-red text-paper-base px-1.5 py-0.2 font-bold shadow-[1px_1px_0_var(--color-ink-deep)]">
              DISPATCH WIRE
            </span>
            <span>VOL. XXVI — NO. 402</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">ANNO DOMINI 1900 / 2026</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span>BENGALURU ROTARY PRINT</span>
            <span>•</span>
            <span className="text-stamp-red font-bold">PRICE: TWO CENTS</span>
          </div>

          {/* Interactive Utilities: Audio Toggle & Paper Grain Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onToggleSound();
                playTelegraphTone(60, 800);
              }}
              className={`px-1.5 py-0.5 border border-ink-deep font-mono text-[9px] sm:text-[10px] font-bold uppercase cursor-pointer transition-all ${
                soundActive
                  ? 'bg-brass-gold text-ink-deep shadow-[1px_1px_0_var(--color-ink-deep)]'
                  : 'bg-paper-muted text-on-surface-variant'
              }`}
              title="Toggle Mechanical Typewriter & Morse Audio"
            >
              {soundActive ? '🔊 AUDIO ON' : '🔇 AUDIO OFF'}
            </button>

            <button
              onClick={onToggleGrain}
              className={`px-1.5 py-0.5 border border-ink-deep font-mono text-[9px] sm:text-[10px] font-bold uppercase cursor-pointer transition-all ${
                grainActive
                  ? 'bg-ink-deep text-paper-base'
                  : 'bg-paper-muted text-on-surface-variant'
              }`}
              title="Toggle Paper Fibers & Grain Overlay"
            >
              GRAIN
            </button>

            {/* Profile Avatar Vignette */}
            <img
              src={PORTFOLIO_DATA.portraitUrl}
              alt={PORTFOLIO_DATA.name}
              className="w-6 h-6 rounded-full object-cover border border-ink-deep shadow-[1px_1px_0_var(--color-ink-deep)]"
              onError={(e) => {
                // Resilient fallback woodcut avatar
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Tier 2: Broadsheet Master Wordmark */}
        <div className="flex items-center justify-between py-1 sm:py-1.5 gap-2">
          <div className="flex flex-col">
            <h1
              onClick={() => {
                playTelegraphTone(50, 600);
                onTabChange('the-gazette');
              }}
              className="font-serif text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-ink-deep font-bold leading-none cursor-pointer hover:text-stamp-red transition-colors"
            >
              The Gazette &amp; Broadsheet
            </h1>
            <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">
              {PORTFOLIO_DATA.honorific} — {PORTFOLIO_DATA.roleLine}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-surface-container-high px-2.5 py-1 border border-ink-deep shadow-[2px_2px_0_var(--color-ink-deep)]">
            <span className="w-2 h-2 rounded-full bg-stamp-red animate-pulse"></span>
            <span className="font-mono text-[10px] text-ink-deep uppercase tracking-widest font-bold">
              CIRCUIT: CLOSED • SCROLL TAPE: {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>

        {/* Tier 3: Vintage Letterpress Navigation Tabs */}
        <div className="flex items-center justify-between pt-1 border-t border-ink-deep/20 overflow-x-auto">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    playTelegraphTone(50, isActive ? 900 : 700);
                    onTabChange(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 sm:px-3 py-1 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all border border-ink-deep cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-ink-deep text-paper-base shadow-[2px_2px_0_var(--color-stamp-red)] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-paper-base text-ink-deep hover:bg-paper-muted hover:text-stamp-red shadow-[2px_2px_0_var(--color-ink-deep)]'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-stamp-red uppercase font-bold shrink-0">
            <span>ED. SPECIAL</span>
            <span>★</span>
            <span className="text-secondary">AIFI VP DESK</span>
          </div>
        </div>
      </div>
    </header>
  );
};
