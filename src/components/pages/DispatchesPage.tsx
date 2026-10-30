import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { playStampThud, playTelegraphTone } from '../../utils/vintageAudio';

interface DispatchesPageProps {
  onOpenBlueprint: (project: Project) => void;
  onNavigateTab: (tab: 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials') => void;
}

export const DispatchesPage: React.FC<DispatchesPageProps> = ({ onOpenBlueprint, onNavigateTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'full-stack' | 'iot-hardware' | 'accessibility'>('all');

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedFilter);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pb-16">
      {/* Top Classification Ledger Bar */}
      <div className="w-full bg-paper-base border-3 border-ink-deep p-4 sm:p-6 shadow-stamp-lg mb-8">
        <div className="flex flex-wrap items-center justify-between text-ink-deep font-mono text-xs uppercase tracking-widest pb-2 mb-3 bg-paper-muted p-2 border border-ink-deep/30">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-stamp-red text-sm">inventory_2</span>
            REGISTRY FILE: PAT-ENG-1900 / 2026
          </span>
          <span className="hidden md:inline text-on-surface-variant">BENGALURU ROTARY MECHANICAL HOUSE • DISPATCH DIV.</span>
          <span className="bg-ink-deep text-paper-base px-2 py-0.5 font-bold">STATUS: AUDITED &amp; DEPLOYED</span>
        </div>

        <div className="text-center py-2">
          <p className="font-mono text-xs text-stamp-red uppercase tracking-widest mb-1 font-bold">
            EXHIBITION OF RECORD • DEPT. OF APPLIED MECHANISMS &amp; ARCHITECTURES
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-ink-deep font-bold mb-2">
            The Industrial Reel: Patented Works &amp; System Engines
          </h1>
          <p className="font-serif text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto italic">
            "Being a curated collation of real full-stack platforms, hardware IoT telemetry, and agentic AI systems engineered and deployed by Mohammed Zain Jawad."
          </p>
        </div>

        {/* Linocut Filigree Ribbon Divider */}
        <div className="w-full py-2 flex items-center justify-center text-ink-deep opacity-80 overflow-hidden">
          <svg className="w-full h-5 max-w-2xl" fill="none" preserveAspectRatio="none" viewBox="0 0 600 20">
            <path d="M0 10 H220 M380 10 H600" stroke="currentColor" strokeWidth="2"></path>
            <path d="M220 10 Q240 2, 260 10 T300 10 T340 10 T380 10" fill="none" stroke="currentColor" strokeWidth="2"></path>
            <circle cx="300" cy="10" fill="var(--color-stamp-red)" r="4"></circle>
            <polygon fill="currentColor" points="280,10 286,6 286,14"></polygon>
            <polygon fill="currentColor" points="320,10 314,6 314,14"></polygon>
          </svg>
        </div>

        {/* Telemetry Sub-Tally Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs uppercase tracking-wider text-ink-deep pt-2">
          <div className="bg-surface-container-high p-2 text-center border border-ink-deep shadow-stamp">
            <span className="block text-on-surface-variant text-[10px]">REGISTERED WORKS</span>
            <span className="font-bold text-stamp-red text-sm">5 PRODUCTION SYSTEMS</span>
          </div>
          <div className="bg-surface-container-high p-2 text-center border border-ink-deep shadow-stamp">
            <span className="block text-on-surface-variant text-[10px]">CORE DOMAINS</span>
            <span className="font-bold text-sm">AI • IOT • WEB</span>
          </div>
          <div className="bg-surface-container-high p-2 text-center border border-ink-deep shadow-stamp">
            <span className="block text-on-surface-variant text-[10px]">COMMUNITY SERVED</span>
            <span className="font-bold text-stamp-red text-sm">2,500+ USERS</span>
          </div>
          <div className="bg-surface-container-high p-2 text-center border border-ink-deep shadow-stamp">
            <span className="block text-on-surface-variant text-[10px]">DEPLOYMENT INTEGRITY</span>
            <span className="font-bold text-sm">ZERO PLACEHOLDER</span>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-4 pt-3 border-t border-ink-deep/20 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
            FILTER REEL ARCHIVE:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Patents (5)' },
              { id: 'full-stack', label: 'Full-Stack Web (2)' },
              { id: 'iot-hardware', label: 'IoT & Hardware (2)' },
              { id: 'accessibility', label: 'Cognitive & Health (1)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => {
                  setSelectedFilter(f.id as any);
                  playTelegraphTone(40, 700);
                }}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider font-bold border border-ink-deep transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-stamp-red text-paper-base shadow-stamp -translate-y-0.5'
                    : 'bg-paper-muted text-ink-deep hover:bg-surface'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Patented Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((proj) => (
          <article
            key={proj.id}
            className="flex flex-col bg-paper-base border-3 border-ink-deep shadow-vermilion-lg hover:-translate-y-1 hover:shadow-folio transition-all relative p-4 sm:p-5 justify-between group"
          >
            {/* Top Seal Stamp */}
            <div className="flex items-center justify-between mb-3 bg-surface-container-high p-1.5 border border-ink-deep font-mono text-[10px]">
              <span className="font-bold text-stamp-red uppercase tracking-widest">
                {proj.patentNumber} • ANNO 1900
              </span>
              <span className="bg-ink-deep text-paper-base px-1.5 py-0.2 font-bold uppercase">
                {proj.statusBadge}
              </span>
            </div>

            <div>
              {/* Schematic Diagram Blueprint Box */}
              <div className="bg-ink-deep p-2 border-2 border-ink-black shadow-inner mb-3">
                <div className="bg-surface-container-low p-2.5 flex flex-col justify-between h-36 font-mono text-[10px] text-ink-deep border border-ink-deep/20 relative">
                  <div className="flex justify-between text-on-surface-variant text-[9px] uppercase border-b border-ink-deep/10 pb-1">
                    <span>SCHEMATIC // FIG. {proj.id.toUpperCase()}</span>
                    <span>SCALE 1:1</span>
                  </div>

                  <div className="my-auto text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold uppercase text-stamp-red block">
                      {proj.title}
                    </span>
                    <span className="text-[10px] text-ink-deep uppercase tracking-widest font-bold">
                      {proj.categoryLabel}
                    </span>
                  </div>

                  <div className="flex justify-between text-[9px] text-on-surface-variant pt-1 border-t border-ink-deep/10">
                    <span className="truncate max-w-[140px]">{proj.techStack[0]}</span>
                    <span>VERITAS</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl uppercase text-ink-deep leading-tight mb-1 font-bold group-hover:text-stamp-red transition-colors">
                {proj.title}
              </h2>
              <p className="font-mono text-xs text-on-surface-variant mb-3 leading-relaxed">
                {proj.problem}
              </p>

              {/* Specifications Chips */}
              <div className="mb-3">
                <span className="block font-mono text-[10px] font-bold text-ink-deep uppercase tracking-wider mb-1">
                  CORE TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-paper-muted text-ink-deep font-mono text-[10px] font-bold uppercase border border-ink-deep shadow-[1px_1px_0_var(--color-ink-deep)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typewriter Specification Readout Box */}
              <div className="bg-surface-container-low p-2.5 mb-4 border border-ink-deep font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">SPEC LATENCY:</span>
                  <span className="font-bold text-ink-deep">{proj.specifications.latencyOrScale}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">FAULT TOLERANCE:</span>
                  <span className="font-bold text-stamp-red">{proj.specifications.faultRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">INFRASTRUCTURE:</span>
                  <span className="font-bold text-ink-deep truncate ml-2">{proj.specifications.hardwareOrDepot}</span>
                </div>
              </div>
            </div>

            {/* Inspect Blueprint Action Trigger */}
            <button
              onClick={() => {
                playStampThud();
                onOpenBlueprint(proj);
              }}
              className="w-full bg-stamp-red text-paper-base font-mono text-xs uppercase tracking-widest font-bold py-2.5 px-3 border-2 border-ink-deep shadow-stamp hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-stamp-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              INSPECT BLUEPRINTS &amp; ARCHITECTURE
            </button>
          </article>
        ))}
      </div>

      {/* Comparative Departmental Ledger Table */}
      <section className="bg-paper-base border-3 border-ink-deep shadow-stamp-lg p-4 sm:p-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-4 border-b-2 border-ink-deep">
          <div>
            <span className="font-mono text-xs text-stamp-red uppercase font-bold tracking-widest">
              OFFICIAL GAZETTE SCHEDULE
            </span>
            <h2 className="font-serif text-2xl uppercase text-ink-deep font-bold">
              Tabular Log of Inventions &amp; Deployed Engines
            </h2>
          </div>
          <span className="bg-ink-deep text-paper-base font-mono text-xs px-2.5 py-1 font-bold uppercase tracking-wider self-start sm:self-auto shadow-stamp mt-2 sm:mt-0">
            VERIFIED ROSTER MCM
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs uppercase tracking-wider text-ink-deep">
            <thead>
              <tr className="bg-paper-muted text-ink-deep border-b-2 border-ink-deep">
                <th className="py-2.5 px-3">RECORD</th>
                <th className="py-2.5 px-3">PATENT APPARATUS</th>
                <th className="py-2.5 px-3">OPERATING SUBSTRATE</th>
                <th className="py-2.5 px-3">PRIMARY CAPABILITY</th>
                <th className="py-2.5 px-3">STATUS</th>
                <th className="py-2.5 px-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-muted">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-surface-container-high transition-colors">
                  <td className="py-3 px-3 font-bold text-stamp-red">{proj.patentNumber}</td>
                  <td className="py-3 px-3 font-bold font-serif text-sm">{proj.title}</td>
                  <td className="py-3 px-3">{proj.techStack[0]} + {proj.techStack[1]}</td>
                  <td className="py-3 px-3">{proj.categoryLabel}</td>
                  <td className="py-3 px-3">
                    <span className="bg-stamp-red text-paper-base px-1.5 py-0.5 font-bold text-[10px] shadow-[1px_1px_0_var(--color-ink-deep)]">
                      {proj.statusBadge}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => onOpenBlueprint(proj)}
                      className="text-stamp-red hover:underline font-bold text-xs cursor-pointer"
                    >
                      SCHEMATIC →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Dispatch Inquiry Banner */}
      <div className="bg-ink-deep text-paper-base border-3 border-ink-black shadow-folio p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 max-w-2xl">
          <span className="font-mono text-xs text-brass-gold uppercase font-bold tracking-widest">
            COMMISSIONING &amp; COOPERATION
          </span>
          <h3 className="font-serif text-2xl uppercase text-paper-base tracking-tight font-bold">
            Require Bespoke System Architecture or Autonomous AI Workflows?
          </h3>
          <p className="font-mono text-xs text-crt-phosphor">
            The Office of Zain Jawad accepts inquiries for high-concurrency systems, IoT firmware designs, and technical leadership via the direct telegraph wire.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => {
              playTelegraphTone(80, 800);
              onNavigateTab('credentials');
            }}
            className="w-full sm:w-auto bg-stamp-red text-paper-base font-mono text-xs uppercase tracking-wider font-bold py-3 px-6 border-2 border-paper-base shadow-stamp hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer text-center"
          >
            TRANSMIT TELEGRAM
          </button>
        </div>
      </div>
    </div>
  );
};
