import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { SplitFlapBoard } from '../SplitFlapBoard';
import { playStampThud, playTelegraphTone } from '../../utils/vintageAudio';

interface GazettePageProps {
  onNavigateTab: (tab: 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials') => void;
  onOpenBlueprint: (project: Project) => void;
}

export const GazettePage: React.FC<GazettePageProps> = ({ onNavigateTab, onOpenBlueprint }) => {
  return (
    <div className="flex flex-col w-full pb-16">
      {/* ================= MARQUEE TICKER TAPE ================= */}
      <section className="w-full bg-ink-deep text-paper-base overflow-hidden py-1.5 border-b-2 border-ink-black shadow-md">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-6 font-mono text-xs uppercase tracking-widest text-crt-phosphor">
          <span>★ EXTRAORDINARY DISPATCH</span>
          <span className="text-stamp-red">◆</span>
          <span>MOHAMMED ZAIN JAWAD • FULL-STACK DEVELOPER &amp; AGENTIC AI BUILDER</span>
          <span className="text-stamp-red">◆</span>
          <span>VICE PRESIDENT: AIFI CLUB @ REVA UNIVERSITY</span>
          <span className="text-stamp-red">◆</span>
          <span>CURIOUS BY NATURE. BUILDER BY EXECUTION.</span>
          <span className="text-stamp-red">◆</span>
          <span>BRIDGING HARDWARE, FULL-STACK WEB &amp; AGENTIC AI</span>
          <span className="text-stamp-red">◆</span>
          <span>WHERE CODE ACQUIRES INTENT &amp; IDEAS BECOME SYSTEMS THAT RUN</span>
          <span className="text-stamp-red">◆</span>
          <span>BENGALURU ROTARY PRINT • 2,500+ COMMUNITY SCALE</span>
          <span className="text-stamp-red">◆</span>
          <span>ANNO DOMINI MCMXXIV–MMXXVI</span>
          <span className="text-stamp-red">◆</span>
        </div>
      </section>

      {/* ================= MECHANICAL SPLIT-FLAP MARQUEE SECTION ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-paper-base border-3 border-ink-deep p-4 sm:p-5 shadow-stamp-lg flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col max-w-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-stamp-red text-base">precision_manufacturing</span>
              <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                ELECTRO-MAGNETIC SOLENOID APERTURE // DEPOT 402
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep tracking-tight font-bold">
              Autonomous Systems &amp; Physical Hardware
            </h2>
            <p className="font-mono text-xs text-on-surface-variant mt-1">
              Live mechanical telemetry cycling active specializations, guild titles, and architectural doctrines.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <SplitFlapBoard />
          </div>
        </div>
      </section>

      {/* ================= MASTER BROADSHEET LEAD HEADLINE ================= */}
      <article className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-4">
        {/* Folio Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-surface-container border-2 border-ink-deep px-4 py-1.5 shadow-stamp mb-6">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-bold">
            <span className="text-stamp-red">★ FOLIO LEAD</span>
            <span>•</span>
            <span className="text-ink-deep">BENGALURU CENTRAL DISPATCH</span>
            <span>•</span>
            <span className="text-secondary">EST. REVA UNIVERSITY</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
            <span className="bg-ink-deep text-paper-base px-1.5 py-0.5 font-bold">
              SERIAL #1900-ZJ
            </span>
            <span className="bg-stamp-red text-paper-base px-1.5 py-0.5 font-bold">
              VERIFIED BUILDER
            </span>
          </div>
        </div>

        {/* Master Headline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-stamp-red font-bold mb-2">
            ★ THE OFFICIAL BROADSHEET LEAD MANIFESTO ★
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-ink-deep font-bold leading-none mb-4 text-balance">
            WHERE CODE ACQUIRES INTENT, DESIGN FINDS PURPOSE, AND IDEAS BECOME SYSTEMS THAT RUN
          </h1>
          <p className="font-serif text-base sm:text-xl text-tertiary italic max-w-2xl leading-snug">
            A Disquisition on Full-Stack Systems, Physical IoT Automation, and Agentic AI Architecture under the Direction of {PORTFOLIO_DATA.honorific}.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                playStampThud();
                onNavigateTab('dispatches');
              }}
              className="bg-stamp-red text-paper-base px-6 py-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-ink-deep shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-folio transition-all cursor-pointer"
            >
              Examine Patented Works (5 Projects) →
            </button>
            <button
              onClick={() => {
                playTelegraphTone(70, 750);
                onNavigateTab('credentials');
              }}
              className="bg-paper-base text-ink-deep px-6 py-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-ink-deep shadow-stamp hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-stamp-lg transition-all cursor-pointer"
            >
              Transmit Cablegram (Contact) ⚡
            </button>
            <button
              onClick={() => {
                playTelegraphTone(50, 900);
                onNavigateTab('chronicle');
              }}
              className="bg-surface-container-high text-secondary px-5 py-2.5 font-mono text-xs uppercase tracking-widest font-bold border-2 border-ink-deep hover:bg-secondary-container transition-all cursor-pointer"
            >
              The AiFi Guild Chronicle
            </button>
          </div>
        </div>
      </article>

      {/* ================= THREE-COLUMN BROADSHEET BODY ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: The Vice President's Dispatch (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col bg-surface-container-low p-4 sm:p-5 border-3 border-ink-deep shadow-stamp-lg justify-between">
            <div>
              <div className="flex items-center justify-between bg-surface-container-high p-1.5 border border-ink-deep mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-deep font-bold">
                  COLUMN I — EDITORIAL
                </span>
                <span className="bg-stamp-red text-paper-base font-mono text-[10px] px-1 font-bold">
                  VP DISPATCH
                </span>
              </div>
              <h2 className="font-serif text-2xl uppercase tracking-tight text-ink-deep mb-1 font-bold">
                The Vice President's Dispatch
              </h2>
              <span className="font-mono text-xs uppercase tracking-wider text-secondary block mb-3 font-bold">
                By Mohammed Zain Jawad — Vice President, AiFi Club
              </span>

              {/* Body prose with drop cap */}
              <div className="font-mono text-xs sm:text-sm text-ink-deep space-y-3 leading-relaxed">
                <p>
                  <span className="float-left font-serif text-5xl font-bold text-stamp-red leading-none mr-2 pr-1">
                    I
                  </span>
                  build systems where creative software engineering, physical hardware, and autonomous AI converge. As a Computer Science &amp; Engineering undergrad at REVA University and Vice President of the AiFi Club, I lead technical teams, engineer full-stack platforms, and build agentic AI systems.
                </p>
                <p>
                  I don't build placeholder prototypes—I architect, design, and deploy end-to-end solutions that solve real operational friction.
                </p>
                <p>
                  From real-time medicine tracking to automated hackathon dispatch consoles and ESP32 ultrasonic water telemetry, software is not merely typed—it is calibrated for sustained operational resilience.
                </p>
              </div>

              {/* Antique Quote Banner */}
              <div className="my-4 bg-ink-deep text-paper-base p-3.5 border border-ink-black shadow-vermilion">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-stamp-red text-xl leading-none">format_quote</span>
                  <div>
                    <blockquote className="font-serif text-base italic text-crt-phosphor leading-snug">
                      “Curious by nature. Builder by execution. Designing products that look exceptional and run without friction.”
                    </blockquote>
                    <cite className="font-mono text-[10px] text-brass-gold uppercase tracking-widest font-bold not-italic block mt-1">
                      — Zain Jawad, Engineering Creed
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-paper-muted p-2 border border-ink-deep text-center font-mono text-[10px] uppercase text-ink-deep tracking-wider font-bold">
              AFFIDAVIT: REVA UNIVERSITY AIML COMMUNITY
            </div>
          </aside>

          {/* Column 2: Centerpiece Engraved Woodcut Portrait Vignette (4 Cols) */}
          <article className="lg:col-span-4 flex flex-col bg-surface-container p-4 sm:p-5 border-3 border-ink-deep shadow-vermilion-lg justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs uppercase tracking-widest">
                <span className="bg-stamp-red text-paper-base px-2 py-0.5 font-bold shadow-stamp">
                  AUTHENTIC SEAL
                </span>
                <span className="font-bold text-on-surface-variant">PLATE NO. 01-Z</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative bg-ink-deep p-1.5 border-2 border-ink-black shadow-stamp-lg overflow-hidden flex flex-col items-center">
                <img
                  src={PORTFOLIO_DATA.portraitUrl}
                  alt="Official Portrait of Mohammed Zain Jawad"
                  className="w-full h-72 object-cover object-top grayscale contrast-125 sepia-[0.3]"
                  onError={(e) => {
                    // Fallback to woodcut image or styled box
                    (e.target as HTMLImageElement).src = PORTFOLIO_DATA.woodcutPortraitUrl;
                  }}
                />
                
                {/* Stamp overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-paper-base/95 p-2 border border-ink-deep shadow-md text-center">
                  <span className="font-serif text-base uppercase tracking-tight block font-bold text-ink-deep">
                    MOHAMMED ZAIN JAWAD
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stamp-red font-bold">
                    VICE PRESIDENT • AIFI CLUB @ REVA
                  </span>
                </div>
              </div>

              {/* Inspection record */}
              <div className="mt-4 bg-paper-muted p-3 border border-ink-deep shadow-stamp">
                <div className="flex items-center justify-between mb-1 text-[11px] font-mono">
                  <span className="uppercase text-ink-deep font-bold">REGISTRY STATUS</span>
                  <span className="bg-brass-gold text-ink-deep px-1.5 py-0.5 font-bold uppercase">
                    AUDITED 100%
                  </span>
                </div>
                <p className="font-mono text-xs text-on-surface leading-tight">
                  {PORTFOLIO_DATA.coreIdentity}
                </p>
              </div>

              {/* System Reliability Telemetry Gauge */}
              <div className="mt-3 flex items-center justify-between bg-surface-container-high p-3 border border-ink-deep">
                <div className="flex flex-col font-mono">
                  <span className="text-[10px] uppercase tracking-widest text-ink-deep font-bold">
                    SYSTEM RELIABILITY &amp; SCALE
                  </span>
                  <span className="font-serif text-lg text-stamp-red font-bold">
                    2,500+ REGISTRATIONS
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    50+ Universities Across India
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-stamp-red bg-paper-base flex items-center justify-center font-mono text-xs font-bold text-stamp-red shadow-stamp shrink-0">
                  99%
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="font-mono text-[9px] uppercase tracking-widest text-on-surface-variant">
                BENGALURU ROTARY • IMPERIAL RECORD NO. 402
              </span>
            </div>
          </article>

          {/* Column 3: Curated Ledger of Inventions Preview (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col bg-surface-container-low p-4 sm:p-5 border-3 border-ink-deep shadow-stamp-lg justify-between">
            <div>
              <div className="flex items-center justify-between bg-surface-container-high p-1.5 border border-ink-deep mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-deep font-bold">
                  COLUMN III — PATENTS
                </span>
                <span className="bg-secondary text-paper-base font-mono text-[10px] px-1 font-bold">
                  INVENTIONS
                </span>
              </div>
              <h2 className="font-serif text-2xl uppercase tracking-tight text-ink-deep mb-1 font-bold">
                Curated Patent Ledger
              </h2>
              <span className="font-mono text-xs uppercase tracking-wider text-secondary block mb-3 font-bold">
                Shipped Systems &amp; Hardware Engines
              </span>

              {/* 3 Featured projects from data */}
              <div className="space-y-3">
                {PORTFOLIO_DATA.projects.slice(0, 3).map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onOpenBlueprint(proj)}
                    className="bg-paper-base p-3 border-2 border-ink-deep shadow-stamp hover:shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1 font-mono text-[10px]">
                      <span className="bg-stamp-red text-paper-base px-1.5 py-0.2 font-bold uppercase">
                        {proj.patentNumber}
                      </span>
                      <span className="text-secondary font-bold uppercase">{proj.statusBadge}</span>
                    </div>
                    <h3 className="font-serif text-lg uppercase text-ink-deep font-bold group-hover:text-stamp-red transition-colors">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-xs text-on-surface-variant mt-1 line-clamp-2 leading-snug">
                      {proj.tagline}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-ink-deep/20 font-mono text-[10px]">
                      <span className="text-stamp-red font-bold uppercase">INSPECT SCHEMATICS →</span>
                      <span className="text-on-surface-variant uppercase">{proj.techStack[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  playStampThud();
                  onNavigateTab('dispatches');
                }}
                className="w-full bg-paper-base text-ink-deep font-mono text-xs uppercase tracking-widest py-2.5 font-bold border-2 border-ink-deep shadow-stamp hover:bg-paper-muted transition-colors cursor-pointer block text-center"
              >
                Inspect All 5 Patented Works →
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= THE MECHANICAL PROCESS: 4 BEATS ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="bg-paper-base border-3 border-ink-deep p-6 sm:p-8 shadow-folio">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-stamp-red font-bold">
              METHODUS OPERANDI • SYSTEM ENGINEERING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-ink-deep font-bold mt-1">
              The Four Mechanical Beats of Execution
            </h2>
            <p className="font-mono text-xs sm:text-sm text-tertiary max-w-2xl mt-1">
              How ambiguous requirements are forged into resilient full-stack platforms and physical IoT systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Beat 1 */}
            <div className="bg-surface-container-high p-4 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-stamp-red text-paper-base flex items-center justify-center font-serif text-lg font-bold shadow-stamp mb-3">
                  01
                </div>
                <h3 className="font-serif text-lg uppercase text-ink-deep font-bold">Listen &amp; Audit</h3>
                <p className="font-mono text-xs text-on-surface mt-2 leading-relaxed">
                  Understand the true operational dilemma, user friction, and physical hardware constraints before writing a single line of code.
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase text-secondary font-bold tracking-widest mt-4">
                PHASE I • INQUIRY
              </span>
            </div>

            {/* Beat 2 */}
            <div className="bg-surface-container-high p-4 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-ink-deep text-paper-base flex items-center justify-center font-serif text-lg font-bold shadow-vermilion mb-3">
                  02
                </div>
                <h3 className="font-serif text-lg uppercase text-ink-deep font-bold">Map on Paper</h3>
                <p className="font-mono text-xs text-on-surface mt-2 leading-relaxed">
                  Diagram the complete architecture on drafted parchment first. System boundaries, database triggers, telemetry rivers, and deadlines.
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase text-secondary font-bold tracking-widest mt-4">
                PHASE II • SCHEMATICS
              </span>
            </div>

            {/* Beat 3 */}
            <div className="bg-surface-container-high p-4 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-brass-gold text-ink-deep flex items-center justify-center font-serif text-lg font-bold shadow-stamp mb-3">
                  03
                </div>
                <h3 className="font-serif text-lg uppercase text-ink-deep font-bold">Build &amp; Ship</h3>
                <p className="font-mono text-xs text-on-surface mt-2 leading-relaxed">
                  Rapidly engineer a hardened prototype. Run sensor filters, test offline DB persistence, and eradicate failure modes under hackathon velocity.
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase text-secondary font-bold tracking-widest mt-4">
                PHASE III • ASSEMBLY
              </span>
            </div>

            {/* Beat 4 */}
            <div className="bg-surface-container-high p-4 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-secondary text-paper-base flex items-center justify-center font-serif text-lg font-bold shadow-stamp mb-3">
                  04
                </div>
                <h3 className="font-serif text-lg uppercase text-ink-deep font-bold">Run &amp; Codify</h3>
                <p className="font-mono text-xs text-on-surface mt-2 leading-relaxed">
                  Deliver exhaustive documentation, automated tests, and operational runbooks so systems operate without human micromanagement.
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase text-secondary font-bold tracking-widest mt-4">
                PHASE IV • PERPETUITY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL-TO-ACTION WIRE STRIP ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-ink-deep text-paper-base border-3 border-ink-black shadow-folio p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-stamp-red animate-pulse"></span>
              <span className="font-mono text-xs text-brass-gold uppercase tracking-widest font-bold">
                OFFICE OF ZAIN JAWAD • DISPATCH ACTIVE
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl uppercase text-paper-base tracking-tight font-bold">
              Ready to Turn an Ambitious Idea Into Shipped Architecture?
            </h3>
            <p className="font-mono text-xs sm:text-sm text-paper-muted mt-1">
              "You’ve scrolled this far. You look a lot like my next collaborator." — My inbox is open for full-stack engineering, agentic AI systems, and tech leadership.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                playTelegraphTone(70, 800);
                onNavigateTab('credentials');
              }}
              className="w-full sm:w-auto bg-stamp-red text-paper-base font-mono text-xs uppercase tracking-wider font-bold py-3 px-6 border-2 border-paper-base shadow-[4px_4px_0_var(--color-brass-gold)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer text-center"
            >
              TRANSMIT CABLEGRAM ⚡
            </button>
            <a
              href="mailto:zainjawad@gmail.com"
              className="w-full sm:w-auto bg-paper-base text-ink-deep font-mono text-xs uppercase tracking-wider font-bold py-3 px-6 border-2 border-ink-deep shadow-stamp hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-center block"
            >
              EMAIL DIRECT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
