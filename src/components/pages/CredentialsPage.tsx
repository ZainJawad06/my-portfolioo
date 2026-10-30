import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { playStampThud, playTelegraphTone, textToMorse } from '../../utils/vintageAudio';

export const CredentialsPage: React.FC = () => {
  const { contacts } = PORTFOLIO_DATA;
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [dispatchClass, setDispatchClass] = useState('URGENT IMPERIAL PRIORITY (AGENTIC AI)');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionReceipt, setTransmissionReceipt] = useState<string | null>(null);
  const [showDossierModal, setShowDossierModal] = useState(false);

  const wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;
  const morsePreview = textToMorse(message.slice(0, 40));

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isTransmitting) return;

    setIsTransmitting(true);
    playTelegraphTone(120, 780);

    // Simulated Morse transmission sequence
    setTimeout(() => {
      playTelegraphTone(80, 840);
    }, 180);
    setTimeout(() => {
      playTelegraphTone(140, 780);
    }, 320);

    setTimeout(() => {
      playStampThud();
      const receiptId = `TEL-${Math.floor(10000 + Math.random() * 90000)}`;
      setTransmissionReceipt(receiptId);
      setIsTransmitting(false);

      // Open mailto client as fallback with pre-filled content
      const mailtoLink = `mailto:${encodeURIComponent('zainjawad@gmail.com')}?subject=${encodeURIComponent(
        `[${dispatchClass}] Cablegram from ${senderName}`
      )}&body=${encodeURIComponent(
        `SENDER: ${senderName}\nCONTACT: ${senderAddress}\nPRIORITY: ${dispatchClass}\n\nMESSAGE:\n${message}\n\n[DISPATCH ID: ${receiptId}]`
      )}`;
      
      const mailWindow = window.open(mailtoLink, '_blank');
      if (!mailWindow) {
        window.location.href = mailtoLink;
      }
    }, 800);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pb-16 space-y-10">
      {/* Overhead Cablegram Notice */}
      <div className="w-full bg-paper-base border-2 border-ink-deep shadow-stamp py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-xs text-ink-deep uppercase tracking-widest">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-ink-deep text-paper-base px-2 py-0.5 font-bold shadow-stamp">
            DISPATCH NO. 1900-VI
          </span>
          <span>IMPERIAL LEDGER &amp; MARCONI TRANSOCEANIC RELAY</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="text-stamp-red font-bold animate-pulse">● ● ● — — — ● ● ●</span>
          <span>[MORSE WIRE: LATENCY ZERO • NOMINAL]</span>
        </div>
      </div>

      {/* Hero Lead Masthead */}
      <div className="bg-surface-container border-3 border-ink-deep shadow-folio p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex flex-col max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-stamp-red text-paper-base font-mono text-xs uppercase tracking-widest font-bold shadow-stamp">
                ARCHIVAL REGISTRY
              </span>
              <span className="font-mono text-xs text-secondary uppercase font-bold tracking-wider">
                CIVIL VOL. IV • FOLIO 88
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-ink-deep font-bold leading-none mb-3">
              Official Record of Service &amp; Telegraph Wire
            </h1>
            <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Authenticated curriculum vitae, administrative ledger, and direct transcontinental telegram apparatus of <strong className="text-ink-deep">{PORTFOLIO_DATA.honorific}</strong>, Full-Stack Developer, Agentic AI &amp; IoT Builder.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-paper-base border-2 border-ink-deep shadow-vermilion rotate-1 self-start">
            <div className="w-14 h-14 rounded-full bg-stamp-red text-paper-base flex items-center justify-center font-mono text-xs font-bold shadow-stamp mb-1">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-deep font-bold">VERIFIED ENTRY</span>
            <span className="font-mono text-[9px] text-stamp-red tracking-wider">A.D. 1900–2026</span>
          </div>
        </div>

        {/* Quick Metrics Ribbon */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-surface-container-high border border-ink-deep shadow-stamp flex flex-col font-mono">
            <span className="text-[10px] text-on-surface-variant uppercase">OFFICE HELD</span>
            <span className="font-serif text-lg text-ink-deep font-bold">VICE PRESIDENT</span>
            <span className="text-xs text-stamp-red font-bold">AIFI CLUB EXECUTIVE</span>
          </div>
          <div className="p-3 bg-surface-container-high border border-ink-deep shadow-stamp flex flex-col font-mono">
            <span className="text-[10px] text-on-surface-variant uppercase">GOVERNANCE LEAD</span>
            <span className="font-serif text-lg text-ink-deep font-bold">AI-RENA 2.0</span>
            <span className="text-xs text-secondary font-bold">NATIONAL TECH WEEK</span>
          </div>
          <div className="p-3 bg-surface-container-high border border-ink-deep shadow-stamp flex flex-col font-mono">
            <span className="text-[10px] text-on-surface-variant uppercase">SYSTEMS DEPLOYED</span>
            <span className="font-serif text-lg text-ink-deep font-bold">5 MASTER APPARATUSES</span>
            <span className="text-xs text-stamp-red font-bold">MEDIREMIND • ZYNQ • IOT</span>
          </div>
          <div className="p-3 bg-surface-container-high border border-ink-deep shadow-stamp flex flex-col font-mono">
            <span className="text-[10px] text-on-surface-variant uppercase">TELEGRAPHIC STATUS</span>
            <span className="font-serif text-lg text-ink-deep font-bold">DISPATCH READY</span>
            <span className="text-xs text-secondary font-bold">DUPLEX COMM ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Victorian Ledger Table */}
      <section className="bg-paper-base border-3 border-ink-deep shadow-folio p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b-2 border-ink-deep">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-stamp-red font-bold">
              IMPERIAL REGISTRATION NO. 44-X
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink-deep uppercase tracking-tight font-bold">
              The Victorian Ledger of Competencies &amp; Tenure
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest bg-paper-muted text-ink-deep px-3 py-1 border border-ink-deep shadow-stamp self-start sm:self-auto mt-2 sm:mt-0 font-bold">
            PAGINATED RECORD
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs text-ink-deep">
            <thead className="bg-ink-deep text-paper-base uppercase tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Chronicle &amp; Class</th>
                <th className="py-2.5 px-3">Station &amp; Mandate</th>
                <th className="py-2.5 px-3">Architectural Domain</th>
                <th className="py-2.5 px-3">Audited Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-muted">
              {/* Row 1 */}
              <tr className="hover:bg-surface transition-colors">
                <td className="py-3 px-3 align-top bg-surface-container-low font-mono">
                  <span className="bg-stamp-red text-paper-base px-1.5 py-0.2 font-bold uppercase shadow-[1px_1px_0_var(--color-ink-deep)] text-[10px]">
                    APPOINTMENT I
                  </span>
                  <p className="mt-1 font-bold text-ink-deep">1924 — PRES.</p>
                  <span className="text-on-surface-variant text-[10px]">Registered Roll</span>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-serif text-base font-bold text-ink-deep block">Vice President of Operations</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold block mb-1">
                    AIFI CLUB @ REVA UNIVERSITY
                  </span>
                  <p className="text-on-surface-variant text-xs">
                    Presides over core technical systems, multi-agent workflows, sponsorship liaisons, and cross-functional student engineering teams.
                  </p>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-bold text-ink-deep block mb-1">Executive Systems &amp; Venture Structuring</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Team Mentorship
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Industry Liaison
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Scale Operations
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="text-stamp-red font-bold">2,500+ Registrations Scaled</span>
                  <p className="text-on-surface-variant text-[11px]">
                    Continuous operational leadership across 7+ landmark events and 50+ university cohorts.
                  </p>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-surface transition-colors">
                <td className="py-3 px-3 align-top bg-surface-container-low font-mono">
                  <span className="bg-ink-deep text-paper-base px-1.5 py-0.2 font-bold uppercase shadow-[1px_1px_0_var(--color-stamp-red)] text-[10px]">
                    CONGRESS 1926
                  </span>
                  <p className="mt-1 font-bold text-ink-deep">1925 — 1926</p>
                  <span className="text-on-surface-variant text-[10px]">National Tech Week</span>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-serif text-base font-bold text-ink-deep block">Director of Engineering Operations</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold block mb-1">
                    AI-RENA 2.0 NATIONAL SUMMIT
                  </span>
                  <p className="text-on-surface-variant text-xs">
                    Scaled flagship national tech week from 58 participants to 500+ participants and 85+ teams backed by GeeksforGeeks.
                  </p>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-bold text-ink-deep block mb-1">High-Throughput Intake &amp; Hackathon Ops</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      24hr Hackathons
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Codeathons
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Live Triage
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="text-stamp-red font-bold">500+ Delegates Coordinated</span>
                  <p className="text-on-surface-variant text-[11px]">
                    Facilitated student builders working with industry leaders from Tredence, BlinkHealth, KPMG, and JLL.
                  </p>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface transition-colors">
                <td className="py-3 px-3 align-top bg-surface-container-low font-mono">
                  <span className="bg-secondary text-paper-base px-1.5 py-0.2 font-bold uppercase shadow-[1px_1px_0_var(--color-ink-deep)] text-[10px]">
                    VENTURE ARCH
                  </span>
                  <p className="mt-1 font-bold text-ink-deep">1924 — 1925</p>
                  <span className="text-on-surface-variant text-[10px]">Shipped Patents</span>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-serif text-base font-bold text-ink-deep block">Full-Stack Architect &amp; IoT Builder</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold block mb-1">
                    MEDIREMIND • ZYNQ • AQUASENSE • VERDANTIS
                  </span>
                  <p className="text-on-surface-variant text-xs">
                    Designed and deployed real-time rotating QR check-in engines, Supabase offline-first medicine managers, and ESP32 ultrasonic water flow monitors.
                  </p>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="font-bold text-ink-deep block mb-1">Hardware-Software Convergence</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      ESP32 / C++
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      React &amp; Tailwind
                    </span>
                    <span className="px-1.5 py-0.2 bg-paper-muted text-ink-deep text-[10px] border border-ink-deep font-bold">
                      Supabase Cloud
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 align-top">
                  <span className="text-stamp-red font-bold">100% Production Codebases</span>
                  <p className="text-on-surface-variant text-[11px]">
                    Zero placeholder prototypes; live hardware interlocks and fail-safe sensor pipelines deployed.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Western Union / Marconi Telegraph Cablegram Dispatch Console */}
      <section className="bg-paper-muted border-3 border-ink-deep shadow-folio p-6 sm:p-8" id="telegram-console">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-ink-deep">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-ink-deep text-paper-base flex items-center justify-center font-bold shadow-vermilion">
              <span className="material-symbols-outlined text-2xl">cable</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-stamp-red font-bold">
                WESTERN UNION &amp; MARCONI TELEGRAPH CO.
              </span>
              <h3 className="font-serif text-2xl uppercase tracking-tight text-ink-deep font-bold">
                TRANSMIT A CABLEGRAM TO ZAIN JAWAD
              </h3>
            </div>
          </div>
          <div className="flex flex-col md:items-end font-mono text-xs">
            <span className="uppercase text-ink-deep font-bold">TARIFF: 12 WORDS PREPAID</span>
            <span className="text-on-surface-variant">STATION: BENGALURU CENTRAL EXCH.</span>
          </div>
        </div>

        {/* Morse Tape Accent */}
        <div className="w-full bg-ink-deep text-paper-base px-4 py-1.5 font-mono text-[11px] tracking-widest flex items-center justify-between mb-4 overflow-x-hidden border border-ink-black">
          <span className="text-crt-glow">── ··· ── ··· ── ··· WIRE DIRECT: MOHAMMED ZAIN JAWAD ESQ ── ··· ── ···</span>
          <span className="hidden sm:inline text-crt-glow">PARIS — LONDON — BENGALURU — NEW YORK</span>
        </div>

        {/* Telegram Form */}
        <form onSubmit={handleTransmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-wider text-ink-deep font-bold mb-1">
                [SENDER NAME / ORGANIZATION]
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Lord / Madam / Founder..."
                className="bg-paper-base text-ink-deep font-mono text-xs sm:text-sm px-3 py-2 border-2 border-ink-deep shadow-inner focus:outline-none focus:border-stamp-red"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-wider text-ink-deep font-bold mb-1">
                [RETURN TELEGRAPHIC WIRE / EMAIL]
              </label>
              <input
                type="email"
                required
                value={senderAddress}
                onChange={(e) => setSenderAddress(e.target.value)}
                placeholder="collaborator@venture-house.org"
                className="bg-paper-base text-ink-deep font-mono text-xs sm:text-sm px-3 py-2 border-2 border-ink-deep shadow-inner focus:outline-none focus:border-stamp-red"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-wider text-ink-deep font-bold mb-1">
                [DISPATCH CLASS / TARIFF]
              </label>
              <select
                value={dispatchClass}
                onChange={(e) => setDispatchClass(e.target.value)}
                className="bg-paper-base text-ink-deep font-mono text-xs sm:text-sm px-3 py-2 border-2 border-ink-deep shadow-inner focus:outline-none focus:border-stamp-red cursor-pointer"
              >
                <option>URGENT IMPERIAL PRIORITY (AGENTIC AI)</option>
                <option>FULL-STACK PLATFORM COMMISSION</option>
                <option>IOT &amp; HARDWARE EMBEDDED PROJECT</option>
                <option>AI-RENA / AIFI CLUB PARTNERSHIP</option>
                <option>GENERAL RECRUITING &amp; COOPERATION</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1 font-mono text-xs">
              <label className="uppercase tracking-wider text-ink-deep font-bold">
                [BODY OF DISPATCH — INSERT "STOP" FOR PERIODS]
              </label>
              <span className="text-stamp-red font-bold">
                {wordCount} WORDS ENCODED
              </span>
            </div>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value.toUpperCase())}
              placeholder="DEAR ZAIN STOP YOU LOOK A LOT LIKE MY NEXT COLLABORATOR STOP REQUESTING AUDIENCE REGARDING PRODUCTION SOFTWARE AND HARDWARE SYSTEMS STOP AWAITING YOUR WIRE STOP"
              className="w-full bg-paper-base text-ink-deep font-mono text-xs sm:text-sm p-3 border-2 border-ink-deep shadow-inner focus:outline-none focus:border-stamp-red resize-none uppercase"
            />
          </div>

          {/* Live Morse Code Ribbon Preview */}
          {message.trim() && (
            <div className="bg-ink-deep text-crt-phosphor p-2.5 font-mono text-xs border border-ink-black flex items-center gap-2 overflow-x-auto shadow-inner">
              <span className="text-brass-gold font-bold shrink-0">MORSE CARRIER:</span>
              <span className="tracking-widest text-crt-glow truncate">{morsePreview}</span>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
              <span className="text-stamp-red font-bold">★</span>
              <span>DIRECT LINE TO ZAIN JAWAD BENGALURU TERMINAL</span>
            </div>

            <button
              type="submit"
              disabled={isTransmitting}
              className="w-full sm:w-auto px-6 py-3 bg-stamp-red text-paper-base font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-ink-deep shadow-stamp-lg hover:shadow-folio hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-base">send</span>
              <span>{isTransmitting ? 'ENCODING TRANSMISSION...' : 'TRANSMIT TELEGRAM VIA CABLE ⚡'}</span>
            </button>
          </div>
        </form>

        {/* Acknowledgement Dialog */}
        {transmissionReceipt && (
          <div className="mt-4 p-4 bg-paper-base border-3 border-stamp-red shadow-stamp">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stamp-red text-3xl">done_all</span>
              <div>
                <h4 className="font-serif text-lg text-ink-deep font-bold uppercase">
                  CABLEGRAM CONVEYED TO BENGALURU TERMINAL
                </h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Your transmission has been logged under dispatch identifier <strong className="text-ink-deep">{transmissionReceipt}</strong>. Zain Jawad will respond via electronic return mail post-haste.
                </p>
                <div className="mt-2 text-[10px] font-mono text-stamp-red font-bold uppercase">
                  RECEIPT ACKNOWLEDGED • DISPATCH LOGGED IN MASTER TELEMETRY
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Direct Contact Channels Box (From README) */}
      <section className="bg-paper-base border-3 border-ink-deep p-6 sm:p-8 shadow-folio">
        <div className="pb-3 mb-6 border-b-2 border-ink-deep">
          <span className="font-mono text-xs text-stamp-red uppercase tracking-widest font-bold">
            LET’S MAKE IT OFFICIAL
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl uppercase text-ink-deep font-bold mt-1">
            "{contacts.mainHook}"
          </h2>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
            {contacts.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.channels.map((chan) => (
            <a
              key={chan.platform}
              href={chan.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playTelegraphTone(50, 700)}
              className="bg-surface p-4 border-2 border-ink-deep shadow-stamp hover:shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase font-bold text-stamp-red">
                    {chan.platform}
                  </span>
                  <span className="material-symbols-outlined text-ink-deep text-lg group-hover:text-stamp-red transition-colors">
                    {chan.icon}
                  </span>
                </div>
                <span className="font-serif text-base font-bold text-ink-deep block mb-1">
                  {chan.handle}
                </span>
                <p className="font-mono text-[10px] text-on-surface-variant leading-tight">
                  {chan.purpose}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-ink-deep/20 flex items-center justify-between text-[10px] font-mono font-bold text-stamp-red">
                <span>OPEN DISPATCH</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Punchline */}
        <div className="mt-6 p-3 bg-surface-container-high border border-ink-deep text-center font-mono text-xs text-ink-deep italic">
          “{contacts.footerPunchline}”
        </div>
      </section>

      {/* Bound Leather-Embossed Dossier & Printable CV Modal Trigger */}
      <section className="bg-surface-container-high border-3 border-ink-deep p-6 sm:p-8 shadow-stamp-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="bg-paper-base p-5 border-2 border-ink-deep shadow-stamp text-center relative flex flex-col items-center">
            <div className="absolute -top-3 -right-2 bg-stamp-red text-paper-base px-2 py-0.5 font-mono text-[10px] font-bold uppercase shadow-stamp rotate-6">
              CLASS I LEAD
            </div>
            <div className="w-16 h-16 rounded-full bg-ink-deep text-paper-base flex items-center justify-center font-bold my-2 shadow-vermilion">
              <span className="material-symbols-outlined text-3xl">history_edu</span>
            </div>
            <h4 className="font-serif text-xl uppercase text-ink-deep font-bold">
              OFFICIAL DOSSIER
            </h4>
            <span className="font-mono text-xs text-secondary font-bold uppercase block mb-2">
              CURRICULUM VITAE REGISTRUM
            </span>
            <div className="w-full bg-paper-muted p-2 font-mono text-[10px] text-left uppercase space-y-0.5 border border-ink-deep/30">
              <div>• FOLIO: REVA UNIVERSITY CS</div>
              <div>• VP OF AIFI CLUB GUILD</div>
              <div>• 5 PRODUCTION PATENTS</div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-stamp-red font-bold">
                AUTHENTICATED IMPERIAL ISSUANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-deep uppercase tracking-tight font-bold my-1">
                Bound Leather-Embossed Dossier &amp; Resume
              </h3>
              <p className="font-mono text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                Review or print the complete, unabridged credentials record of Mohammed Zain Jawad. Containing all documented engineering architectures, club governance charters, leadership appointments, and verified milestones prepared for executive review.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  playStampThud();
                  setShowDossierModal(true);
                }}
                className="px-6 py-3 bg-ink-deep text-paper-base font-mono text-xs uppercase tracking-wider font-bold border-2 border-ink-black shadow-vermilion hover:shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>INSPECT FULL DOSSIER TRANSCRIPT</span>
              </button>
              <button
                onClick={() => {
                  playTelegraphTone(50, 750);
                  window.print();
                }}
                className="px-6 py-3 bg-paper-base text-ink-deep font-mono text-xs uppercase tracking-wider font-bold border-2 border-ink-deep shadow-stamp hover:shadow-stamp-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">print</span>
                <span>PRINT BROADSHEET FOLIO</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dossier Modal Dialog */}
      {showDossierModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-ink-deep/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-paper-base border-4 border-ink-deep shadow-folio p-6 my-auto max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-ink-deep">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-stamp-red"></span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-ink-deep">
                  OFFICIAL CURRICULUM VITAE TRANSCRIPT
                </span>
              </div>
              <button
                onClick={() => setShowDossierModal(false)}
                className="bg-ink-deep text-paper-base font-mono text-xs px-2.5 py-1 font-bold uppercase hover:bg-stamp-red cursor-pointer"
              >
                CLOSE [X]
              </button>
            </div>

            <div className="font-mono text-xs text-ink-deep space-y-4">
              <div className="text-center pb-3 border-b border-ink-deep/20">
                <h2 className="font-serif text-3xl font-bold uppercase">{PORTFOLIO_DATA.name}</h2>
                <p className="text-xs uppercase text-stamp-red font-bold mt-0.5">{PORTFOLIO_DATA.roleLine}</p>
                <p className="text-[11px] text-on-surface-variant">{PORTFOLIO_DATA.university} • {PORTFOLIO_DATA.location}</p>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold uppercase text-stamp-red border-b border-ink-deep/20 pb-0.5 mb-1.5">
                  1. Executive Summary
                </h3>
                <p className="leading-relaxed">{PORTFOLIO_DATA.executiveSummary}</p>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold uppercase text-stamp-red border-b border-ink-deep/20 pb-0.5 mb-1.5">
                  2. Leadership: Vice President of AiFi Club
                </h3>
                <p className="leading-relaxed">{PORTFOLIO_DATA.aifiClub.overview}</p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] bg-paper-muted p-2 border border-ink-deep">
                  <div><strong>Scale:</strong> 2,500+ Registrations Across India</div>
                  <div><strong>Universities Reached:</strong> 50+ Institutions</div>
                  <div><strong>Flagship:</strong> AI-RENA 2.0 (500+ Participants)</div>
                  <div><strong>Industry:</strong> Tredence, KPMG, BlinkHealth, JLL</div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold uppercase text-stamp-red border-b border-ink-deep/20 pb-0.5 mb-1.5">
                  3. Production Works &amp; Patents
                </h3>
                <ul className="space-y-1.5 text-xs">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <li key={proj.id} className="border-b border-ink-deep/10 pb-1">
                      <strong>{proj.title}</strong> — {proj.tagline}
                      <span className="block text-[10px] text-on-surface-variant">Tech: {proj.techStack.join(', ')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold uppercase text-stamp-red border-b border-ink-deep/20 pb-0.5 mb-1.5">
                  4. Direct Inquiries
                </h3>
                <p>Email: <strong>zainjawad@gmail.com</strong> | GitHub: <strong>github.com/ZainJawad06</strong></p>
                <p>LinkedIn: <strong>linkedin.com/in/zainjawad</strong></p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t-2 border-ink-deep flex justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="bg-paper-muted text-ink-deep font-mono text-xs uppercase px-4 py-2 font-bold border border-ink-deep hover:bg-surface cursor-pointer"
              >
                PRINT DOSSIER
              </button>
              <button
                onClick={() => setShowDossierModal(false)}
                className="bg-stamp-red text-paper-base font-mono text-xs uppercase px-4 py-2 font-bold border border-ink-deep shadow-stamp cursor-pointer"
              >
                RETURN TO LEDGER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
