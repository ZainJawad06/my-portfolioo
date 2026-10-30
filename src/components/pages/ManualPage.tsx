import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { playStampThud, playTelegraphTone } from '../../utils/vintageAudio';

interface ManualPageProps {
  onNavigateTab: (tab: 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials') => void;
}

export const ManualPage: React.FC<ManualPageProps> = ({ onNavigateTab }) => {
  const { techStack, fourPillars, capabilities, learningNow } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredStack = activeCategory === 'all'
    ? techStack
    : techStack.filter(s => s.domain === activeCategory);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pb-16 space-y-10">
      {/* Top Banner */}
      <div className="bg-paper-base border-3 border-ink-deep p-4 sm:p-6 shadow-vermilion-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 text-ink-deep font-mono text-xs uppercase tracking-widest pb-2 mb-3 bg-paper-muted p-2 border border-ink-deep/20">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-stamp-red text-sm">build_circle</span>
            TECHNICAL SPECIFICATION SHEET • REG. NO. 402-MAN
          </span>
          <span className="text-on-surface-variant hidden md:inline">STANDARDS BOARD MCMXXVI</span>
          <span className="bg-stamp-red text-paper-base px-2 py-0.5 font-bold">OPERATIONAL MANUAL</span>
        </div>

        <div className="text-center py-2">
          <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold block mb-1">
            CORE PROFICIENCIES, STACK &amp; METHODOLOGY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-ink-deep font-bold mb-2">
            The Artificer's Technical Field Manual
          </h1>
          <p className="font-serif text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto italic">
            "A comprehensive inventory of toolchains, firmware architectures, agentic pipelines, and full-stack methodologies mastered by Mohammed Zain Jawad."
          </p>
        </div>
      </div>

      {/* The Four Pillars of Operation */}
      <section className="bg-surface-container-high border-3 border-ink-deep p-6 sm:p-8 shadow-stamp-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b-2 border-ink-deep">
          <div>
            <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold">
              THE QUADRANT OF EXECUTION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep font-bold">
              The Four Pillars of Operation
            </h2>
          </div>
          <span className="font-mono text-xs text-on-surface-variant uppercase mt-1 sm:mt-0">
            AUDITED COMPETENCY ARCHITECTURE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fourPillars.map((p) => (
            <div key={p.number} className="bg-paper-base p-5 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-8 h-8 rounded-full bg-stamp-red text-paper-base flex items-center justify-center font-serif text-sm font-bold shadow-stamp">
                    {p.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-secondary">
                    PILLAR {p.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl uppercase text-ink-deep font-bold mb-1.5">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-ink-deep font-bold mb-2 leading-snug">
                  {p.summary}
                </p>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Bring to the Table (Detailed Capabilities) */}
      <section className="bg-paper-base border-3 border-ink-deep p-6 sm:p-8 shadow-folio">
        <div className="pb-3 mb-6 border-b-2 border-ink-deep">
          <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold">
            ENGINEERING VALUE &amp; ROLES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep font-bold">
            What I Bring to the Table
          </h2>
        </div>

        <div className="space-y-4">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low p-4 border-2 border-ink-deep shadow-stamp flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3 max-w-2xl">
                <span className="material-symbols-outlined text-stamp-red text-2xl mt-0.5 shrink-0">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-serif text-lg uppercase text-ink-deep font-bold">
                    {cap.title}
                  </h3>
                  <p className="font-mono text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>

              <div className="bg-paper-base p-2.5 border border-ink-deep md:text-right shrink-0">
                <span className="block font-mono text-[9px] uppercase text-on-surface-variant">DELIVERABLE STANDARD</span>
                <span className="font-mono text-xs text-stamp-red font-bold">{cap.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Tech Stack Matrix */}
      <section className="bg-surface-container border-3 border-ink-deep p-6 sm:p-8 shadow-stamp-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b-2 border-ink-deep gap-2">
          <div>
            <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold">
              SUBSTRATE AUDIT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep font-bold">
              Signature Tech Stack Matrix
            </h2>
          </div>

          {/* Domain Filter */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => {
                setActiveCategory('all');
                playTelegraphTone(40, 700);
              }}
              className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase border border-ink-deep cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-ink-deep text-paper-base shadow-stamp'
                  : 'bg-paper-base text-ink-deep hover:bg-paper-muted'
              }`}
            >
              ALL (6)
            </button>
            {techStack.map(s => (
              <button
                key={s.domain}
                onClick={() => {
                  setActiveCategory(s.domain);
                  playTelegraphTone(40, 750);
                }}
                className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase border border-ink-deep cursor-pointer ${
                  activeCategory === s.domain
                    ? 'bg-stamp-red text-paper-base shadow-stamp'
                    : 'bg-paper-base text-ink-deep hover:bg-paper-muted'
                }`}
              >
                {s.domain}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStack.map((domain) => (
            <div key={domain.domain} className="bg-paper-base p-4 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-ink-deep/20 font-mono text-xs">
                  <span className="flex items-center gap-1 font-bold text-stamp-red">
                    <span className="material-symbols-outlined text-sm">{domain.icon}</span>
                    {domain.domain}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-mono">
                    {domain.tools.length} TOOLS
                  </span>
                </div>
                <p className="font-mono text-[11px] text-on-surface-variant mb-3 italic">
                  {domain.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {domain.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-surface text-ink-deep font-mono text-xs font-bold border border-ink-deep shadow-[1px_1px_0_var(--color-ink-deep)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Banner */}
        <div className="mt-8 bg-paper-base border-2 border-ink-deep p-4 shadow-stamp flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-brass-gold text-2xl">school</span>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-stamp-red tracking-wider">
                CURRENTLY EXPANDING &amp; CALIBRATING:
              </span>
              <p className="font-mono text-xs text-ink-deep font-bold">
                {learningNow}
              </p>
            </div>
          </div>
          <span className="bg-secondary text-paper-base font-mono text-[10px] px-2 py-1 font-bold uppercase shrink-0 shadow-stamp">
            ACTIVE REGIMEN
          </span>
        </div>
      </section>

      {/* Hardware to Cloud Architecture Pipeline Diagram */}
      <section className="bg-ink-deep text-paper-base border-3 border-ink-black shadow-folio p-6 sm:p-8">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-paper-aged/30">
          <div>
            <span className="font-mono text-xs text-brass-gold uppercase tracking-widest font-bold">
              PHYSICAL TO DIGITAL CONDUIT
            </span>
            <h3 className="font-serif text-2xl uppercase text-paper-base font-bold">
              Hardware-to-Cloud Architectural Pipeline
            </h3>
          </div>
          <span className="font-mono text-xs text-crt-phosphor uppercase">
            FLOW SPEC. 1900-ESP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center my-4 font-mono text-xs">
          <div className="bg-surface-container-highest text-ink-deep p-3 border-2 border-brass-gold shadow-stamp">
            <span className="text-[10px] text-stamp-red font-bold uppercase">1. PHYSICAL INPUT</span>
            <h4 className="font-bold text-sm uppercase mt-1">Ultrasonic &amp; Flow</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">HC-SR04 / YF-S201 / Aerobic Sensors</p>
          </div>
          <div className="bg-surface-container-highest text-ink-deep p-3 border-2 border-brass-gold shadow-stamp">
            <span className="text-[10px] text-stamp-red font-bold uppercase">2. EMBEDDED CONTROLLER</span>
            <h4 className="font-bold text-sm uppercase mt-1">ESP32 / ESP8266</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">Median Noise Filtering &amp; Relay Cutoff</p>
          </div>
          <div className="bg-surface-container-highest text-ink-deep p-3 border-2 border-brass-gold shadow-stamp">
            <span className="text-[10px] text-stamp-red font-bold uppercase">3. RELATIONAL CLOUD</span>
            <h4 className="font-bold text-sm uppercase mt-1">Supabase / REST</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">Real-time Events, Auth &amp; Telemetry</p>
          </div>
          <div className="bg-surface-container-highest text-ink-deep p-3 border-2 border-brass-gold shadow-stamp">
            <span className="text-[10px] text-stamp-red font-bold uppercase">4. TACTILE UI</span>
            <h4 className="font-bold text-sm uppercase mt-1">React Neobrutalism</h4>
            <p className="text-[10px] text-on-surface-variant mt-1">High-contrast, offline-first dashboard</p>
          </div>
        </div>

        <div className="text-center pt-2 font-mono text-xs text-crt-glow">
          ✦ Zero-loss offline fallbacks &amp; real-time synchronization engineered end-to-end ✦
        </div>
      </section>
    </div>
  );
};
