import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { playStampThud, playTelegraphTone } from '../../utils/vintageAudio';

interface ChroniclePageProps {
  onNavigateTab: (tab: 'the-gazette' | 'dispatches' | 'chronicle' | 'manual' | 'credentials') => void;
}

export const ChroniclePage: React.FC<ChroniclePageProps> = ({ onNavigateTab }) => {
  const { aifiClub, dogmas } = PORTFOLIO_DATA;

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pb-16 space-y-10">
      {/* Editorial Section Banner */}
      <div className="relative bg-paper-base p-4 sm:p-6 border-3 border-ink-deep shadow-vermilion-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-ink-deep text-paper-base px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold">
              FOLIO SPECIAL EDITION
            </span>
            <span className="text-stamp-red font-mono text-xs uppercase tracking-widest font-bold">
              SECTION IV: BIOGRAPHICA &amp; GUILD CHRONICLE
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-ink-deep font-bold">
            A Biographical Memoir &amp; The AiFi Guild Chronicle
          </h1>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-2xl">
            An authorized chronicle examining Zain Jawad’s engineering doctrine, administrative tenure as Vice President of AiFi Club @ REVA University, and the technical leadership scaling collegiate builder ecosystems.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto bg-surface px-3 py-2 border-2 border-ink-deep shadow-stamp shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-stamp-red animate-pulse"></div>
          <span className="font-mono text-xs font-bold text-ink-deep tracking-widest uppercase">
            DISPATCH CONFIRMED
          </span>
        </div>
      </div>

      {/* Dual-Column Broadsheet Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Editorial Memoir & Community Story (7 Cols) */}
        <article className="lg:col-span-7 flex flex-col gap-6 bg-surface-container-low p-4 sm:p-6 border-3 border-ink-deep shadow-stamp-lg">
          {/* Engraved Vignette Frame */}
          <div className="bg-paper-base p-4 border-2 border-ink-deep shadow-stamp">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 shrink-0 bg-ink-deep p-1 shadow-vermilion">
                <img
                  src={PORTFOLIO_DATA.woodcutPortraitUrl}
                  alt="Zain Jawad Engraved Woodcut"
                  className="w-full h-full object-cover filter contrast-125 sepia"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = PORTFOLIO_DATA.portraitUrl;
                  }}
                />
                <div className="absolute -bottom-2.5 -right-2.5 bg-stamp-red text-paper-base font-mono text-[9px] px-2 py-0.5 font-bold uppercase shadow-stamp">
                  AUTHENTIC SEAL
                </div>
              </div>

              <div className="flex flex-col justify-center gap-1 text-center sm:text-left">
                <span className="font-mono text-[10px] text-stamp-red uppercase font-bold tracking-widest">
                  SUB-DEPARTMENT OF GOVERNANCE
                </span>
                <h2 className="font-serif text-2xl uppercase text-ink-deep leading-none font-bold">
                  {PORTFOLIO_DATA.honorific}
                </h2>
                <p className="font-mono text-xs text-on-surface-variant">
                  Vice President of AiFi Club • Lead Architect of AI-RENA 2.0 • Full-Stack Systems &amp; IoT Engineering Lead
                </p>
                <div className="pt-2 flex flex-wrap gap-1 justify-center sm:justify-start">
                  <span className="bg-paper-muted text-ink-deep px-2 py-0.5 font-mono text-[10px] font-bold uppercase border border-ink-deep">
                    REVA UNIV
                  </span>
                  <span className="bg-paper-muted text-ink-deep px-2 py-0.5 font-mono text-[10px] font-bold uppercase border border-ink-deep">
                    MCMXXIV REG.
                  </span>
                  <span className="bg-primary text-paper-base px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                    VP RECORD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Memoir Body with Drop Cap */}
          <div className="flex flex-col gap-4 text-ink-deep font-mono text-xs sm:text-sm leading-relaxed">
            <p>
              <span className="float-left font-serif text-5xl font-bold text-stamp-red leading-none mr-2 pr-1">
                D
              </span>
              riven by students, guided by faculty, and built for absolute execution, <strong>AiFi</strong> is REVA University’s premier AIML tech community—and one of Bengaluru's most active student AI ecosystems. We operate on a simple philosophy: <em>students learn AI best by doing AI</em>.
            </p>
            <p>
              From high-intensity codeathons and treasure hunts that turn code into clues to 24-hour overnight hackathons where raw ideas transform into working prototypes by sunrise, AiFi bridges the gap between textbook theory and real-world execution.
            </p>

            {/* Vintage Quote Callout */}
            <div className="my-2 bg-ink-deep text-crt-phosphor p-4 border border-ink-black shadow-vermilion">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-stamp-red text-2xl leading-none">format_quote</span>
                <div>
                  <blockquote className="font-serif text-base sm:text-lg italic text-paper-base leading-snug">
                    “{aifiClub.creed}”
                  </blockquote>
                  <cite className="font-mono text-[10px] text-brass-gold uppercase tracking-widest font-bold not-italic block mt-1">
                    — AiFi Club Institutional Doctrine, REVA University
                  </cite>
                </div>
              </div>
            </div>

            <p>
              As the Vice President of AiFi, I sit at the intersection of technical execution, community growth, and strategic leadership. From directing large-scale multi-day summits like <strong>AI-RENA 2.0</strong> (scaling events from 58 participants to a 500+ participant national stage backed by sponsors like GeeksforGeeks) to mentoring core student cohorts and facilitating interactions with industry leaders from <em>Tredence Inc, BlinkHealth, KPMG, and JLL</em>, our mandate remains singular: cultivate a culture where technical builders thrive under pressure.
            </p>
          </div>

          {/* By the Numbers (Scale & Impact) */}
          <div className="bg-paper-base border-2 border-ink-deep p-4 shadow-stamp">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-ink-deep/20 font-mono text-xs">
              <span className="font-bold text-stamp-red uppercase tracking-wider">
                BY THE NUMBERS // SCALE &amp; IMPACT AUDIT
              </span>
              <span className="text-secondary font-bold">BENCHMARK 2026</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {aifiClub.metrics.map((m, idx) => (
                <div key={idx} className="bg-surface-container-high p-2.5 border border-ink-deep shadow-stamp">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-stamp-red block">
                    {m.count}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-ink-deep block mt-0.5">
                    {m.label}
                  </span>
                  <span className="font-mono text-[8px] text-on-surface-variant block mt-0.5">
                    {m.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Stand For: BUILD, LEARN, CONNECT */}
          <div className="border-2 border-ink-deep bg-surface p-4">
            <span className="font-mono text-xs font-bold uppercase text-ink-deep tracking-wider block mb-3">
              WHAT WE STAND FOR (AIFI COMMUNITY TRIAD):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aifiClub.pillars.map((pil, idx) => (
                <div key={idx} className="bg-paper-muted p-2.5 border border-ink-deep">
                  <span className="font-mono text-xs font-bold text-stamp-red block">
                    [{pil.name}]
                  </span>
                  <span className="font-serif text-sm font-bold text-ink-deep block my-0.5">
                    {pil.summary}
                  </span>
                  <p className="font-mono text-[10px] text-on-surface-variant leading-tight">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column: Authentic 1900s Letterpress Broadsheet Poster (5 Cols) */}
        <aside className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-ink-deep text-paper-base p-5 sm:p-6 border-4 border-ink-black shadow-folio flex flex-col items-center text-center relative overflow-hidden">
            {/* Corner Filigree */}
            <div className="absolute top-2 left-2 text-brass-gold font-mono text-xs">✦</div>
            <div className="absolute top-2 right-2 text-brass-gold font-mono text-xs">✦</div>
            <div className="absolute bottom-2 left-2 text-brass-gold font-mono text-xs">✦</div>
            <div className="absolute bottom-2 right-2 text-brass-gold font-mono text-xs">✦</div>

            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-6 bg-stamp-red"></span>
              <span className="font-mono text-[10px] text-peach-highlight uppercase tracking-widest font-bold">
                OFFICIAL BROADSIDE NOTICE
              </span>
              <span className="h-0.5 w-6 bg-stamp-red"></span>
            </div>

            <h3 className="font-serif text-2xl uppercase text-paper-base leading-tight tracking-tight mt-1">
              Now Exhibiting
            </h3>

            <div className="my-2 py-1 px-4 bg-stamp-red text-paper-base shadow-[3px_3px_0_var(--color-paper-base)]">
              <h1 className="font-serif text-2xl sm:text-3xl uppercase tracking-normal font-bold">
                MOHAMMED ZAIN JAWAD
              </h1>
            </div>

            <div className="text-brass-gold font-mono text-xs tracking-widest uppercase font-bold my-1">
              SYSTEMS ★ AI AGENTS ★ IoT HARDWARE
            </div>

            {/* Filigree Divider SVG */}
            <div className="w-full flex justify-center my-2">
              <svg className="w-48 h-5 text-paper-base" fill="currentColor" viewBox="0 0 200 20">
                <path d="M10 10 L80 10 M120 10 L190 10 M90 5 L100 15 L110 5 L100 0 Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                <circle cx="100" cy="10" fill="var(--color-stamp-red)" r="3"></circle>
              </svg>
            </div>

            {/* Key Exhibits List */}
            <div className="w-full flex flex-col gap-2.5 text-left my-2">
              <div className="bg-surface-container-high text-ink-deep p-2.5 border border-stamp-red shadow-stamp flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] text-stamp-red font-bold uppercase">EXHIBIT I</span>
                  <h4 className="font-serif text-sm uppercase text-ink-deep font-bold">AI-RENA 2.0 NATIONAL SUMMIT</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">Scaled 500+ participants &amp; 85+ teams backed by GeeksforGeeks.</p>
                </div>
                <span className="bg-stamp-red text-paper-base font-mono text-[9px] px-1.5 py-0.5 font-bold uppercase mt-1">PROVEN</span>
              </div>

              <div className="bg-surface-container-high text-ink-deep p-2.5 border border-stamp-red shadow-stamp flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] text-stamp-red font-bold uppercase">EXHIBIT II</span>
                  <h4 className="font-serif text-sm uppercase text-ink-deep font-bold">ZYNQ HACKATHON ENGINE</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">Rotating TOTP QR badges &amp; RBAC triage console for events.</p>
                </div>
                <span className="bg-ink-deep text-paper-base font-mono text-[9px] px-1.5 py-0.5 font-bold uppercase mt-1">ACTIVE</span>
              </div>

              <div className="bg-surface-container-high text-ink-deep p-2.5 border border-stamp-red shadow-stamp flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] text-stamp-red font-bold uppercase">EXHIBIT III</span>
                  <h4 className="font-serif text-sm uppercase text-ink-deep font-bold">AQUASENSE PRO &amp; VERDANTIS</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">ESP32 sensor filtration, ultrasonic flow &amp; bio-composting hardware.</p>
                </div>
                <span className="bg-secondary text-paper-base font-mono text-[9px] px-1.5 py-0.5 font-bold uppercase mt-1">STABLE</span>
              </div>
            </div>

            {/* Stamped Circular Ink Marks */}
            <div className="flex items-center justify-around w-full mt-3 pt-2">
              <div className="w-16 h-16 rounded-full bg-paper-base text-ink-deep p-1 flex flex-col items-center justify-center -rotate-12 shadow-[2px_2px_0_var(--color-stamp-red)]">
                <span className="font-mono text-xs font-bold leading-none text-stamp-red">VP</span>
                <span className="text-[7px] tracking-tight uppercase font-bold text-center leading-tight">AIFI CLUB</span>
                <span className="font-mono text-[9px] font-bold text-ink-deep">REVA</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-stamp-red text-paper-base p-1.5 flex flex-col items-center justify-center rotate-6 shadow-stamp">
                <span className="text-[8px] font-bold tracking-widest uppercase text-center leading-none">CERTIFIED</span>
                <span className="font-serif text-sm font-bold leading-none my-0.5">VERITAS</span>
                <span className="text-[6px] tracking-wider uppercase font-bold text-center leading-none">NO FAULT RUNS</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-paper-base text-ink-deep p-1 flex flex-col items-center justify-center -rotate-6 shadow-[2px_2px_0_var(--color-stamp-red)]">
                <span className="font-mono text-[10px] font-bold leading-none text-secondary">BUILD</span>
                <span className="text-[7px] tracking-tight uppercase font-bold text-center leading-tight">HARDWARE</span>
                <span className="font-mono text-[9px] font-bold text-stamp-red">2026</span>
              </div>
            </div>

            <div className="mt-4 text-paper-muted font-mono text-[9px] uppercase tracking-widest">
              PRINTED &amp; DISTRIBUTED BY CABLE TELEGRAPH DISPATCH
            </div>
          </div>
        </aside>
      </div>

      {/* Foundational Dogmas Section */}
      <section className="bg-paper-base border-3 border-ink-deep p-6 sm:p-8 shadow-folio">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-3 border-b-2 border-ink-deep">
          <div>
            <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold">
              CANON OF OPERATIONS
            </span>
            <h2 className="font-serif text-3xl uppercase text-ink-deep tracking-tight font-bold">
              The Foundational Dogmas
            </h2>
          </div>
          <div className="font-mono text-xs text-tertiary uppercase tracking-widest">
            CODIFIED AT THE GUILD ROTARY • SECTION III
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dogmas.map((d) => (
            <div key={d.number} className="bg-surface p-4 sm:p-5 border-2 border-ink-deep shadow-stamp flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-full bg-stamp-red text-paper-base flex items-center justify-center font-serif text-lg font-bold shadow-stamp">
                    {d.number}
                  </div>
                  <span className="bg-paper-muted text-ink-deep px-2 py-0.5 font-mono text-[10px] uppercase font-bold border border-ink-deep">
                    CANON {d.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl uppercase text-ink-deep font-bold mb-2">
                  {d.title}
                </h3>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                  {d.text}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-ink-deep/20 font-mono text-[10px] text-stamp-red font-bold uppercase tracking-wider">
                REF: {d.ref}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action: Petition the Office */}
      <section className="bg-surface-container-high p-6 sm:p-8 border-3 border-ink-deep shadow-folio flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="bg-stamp-red text-paper-base px-2 py-0.5 font-mono text-[10px] uppercase font-bold tracking-widest">
              TRANSMISSION DISPATCH
            </span>
            <span className="font-mono text-xs text-on-surface-variant uppercase font-bold">WIRE ACTIVE</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep font-bold">
            Petition The Office of Zain Jawad
          </h3>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Whether you seek to commission resilient software architectures, build IoT hardware networks, or summon the technical advisory of the Vice President for your forthcoming enterprise, transfix your dispatch through the telegraph wire.
          </p>
        </div>

        <button
          onClick={() => {
            playStampThud();
            onNavigateTab('credentials');
          }}
          className="bg-stamp-red text-paper-base font-mono text-xs sm:text-sm uppercase tracking-widest font-bold py-3 px-6 border-2 border-ink-deep shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          OPEN TELEGRAPH CONSOLE →
        </button>
      </section>
    </div>
  );
};
