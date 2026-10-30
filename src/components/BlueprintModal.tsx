import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/portfolioData';
import { playStampThud, playTelegraphTone } from '../utils/vintageAudio';

interface BlueprintModalProps {
  project: Project | null;
  onClose: () => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      playStampThud();
    }
  }, [project]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop with vintage dark scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-deep/80 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-paper-base border-4 border-ink-deep shadow-[12px_12px_0_var(--color-stamp-red)] z-10 my-auto text-ink-deep overflow-hidden"
          >
            {/* Victorian Blueprint Header Bar */}
            <div className="bg-ink-deep text-paper-base px-4 py-2.5 flex items-center justify-between border-b-2 border-ink-black">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-stamp-red"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-crt-glow">
                  ROYAL PATENT ARCHIVE // {project.patentNumber}
                </span>
                <span className="text-paper-muted hidden sm:inline">•</span>
                <span className="font-mono text-xs text-paper-muted uppercase tracking-wider hidden sm:inline">
                  {project.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => {
                  playTelegraphTone(60, 500);
                  onClose();
                }}
                className="bg-stamp-red text-paper-base font-mono text-xs px-2.5 py-1 font-bold uppercase hover:bg-brick-red active:translate-y-0.5 shadow-stamp transition-colors cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Blueprint Schematic Banner Area */}
            <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="bg-surface-container-high border-2 border-ink-deep p-3 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-on-surface-variant uppercase tracking-wider pb-1 border-b border-ink-deep/20">
                  <span>SCHEMATIC FIG. {project.patentNumber.replace('PAT-', '')}</span>
                  <span>CALIPER GRID: 0.25mm / ANNO {project.year}</span>
                  <span className="bg-stamp-red text-paper-base px-1.5 font-bold">{project.statusBadge}</span>
                </div>
                
                <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-deep">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wide">
                    {project.categoryLabel}
                  </span>
                </div>
                <p className="font-mono text-xs sm:text-sm text-on-surface-variant italic mt-1">
                  "{project.tagline}"
                </p>
              </div>

              {/* Problem & Solution Dual Broadsheet Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* The Friction / Problem */}
                <div className="bg-surface-container-low border-2 border-ink-deep p-3.5 shadow-stamp flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-stamp-red/30">
                    <span className="w-2 h-2 rounded-full bg-stamp-red"></span>
                    <span className="font-mono text-xs font-bold uppercase text-stamp-red tracking-wider">
                      OPERATIONAL FRICTION / PROBLEM
                    </span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-ink-deep leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* What Zain Engineered */}
                <div className="bg-surface-container-low border-2 border-ink-deep p-3.5 shadow-stamp flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-secondary/30">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-mono text-xs font-bold uppercase text-secondary tracking-wider">
                      ARCHITECTURAL SOLUTION / SHIPPED
                    </span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-ink-deep leading-relaxed">
                    {project.whatBuilt}
                  </p>
                </div>
              </div>

              {/* Technical Specifications Readout Table */}
              <div className="border-2 border-ink-deep bg-paper-muted p-3">
                <span className="block font-mono text-[11px] font-bold uppercase text-ink-deep tracking-wider mb-2">
                  TELEMETRY SPECIFICATIONS & PERFORMANCE BENCHMARKS:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="bg-paper-base p-2 border border-ink-deep/30">
                    <span className="block text-[9px] text-on-surface-variant uppercase">THROUGHPUT / SCALE</span>
                    <span className="font-bold text-stamp-red">{project.specifications.latencyOrScale}</span>
                  </div>
                  <div className="bg-paper-base p-2 border border-ink-deep/30">
                    <span className="block text-[9px] text-on-surface-variant uppercase">FAULT TOLERANCE</span>
                    <span className="font-bold text-ink-deep">{project.specifications.faultRate}</span>
                  </div>
                  <div className="bg-paper-base p-2 border border-ink-deep/30">
                    <span className="block text-[9px] text-on-surface-variant uppercase">HOSTING DEPOT / BUS</span>
                    <span className="font-bold text-ink-deep truncate block">{project.specifications.hardwareOrDepot}</span>
                  </div>
                  <div className="bg-paper-base p-2 border border-ink-deep/30">
                    <span className="block text-[9px] text-on-surface-variant uppercase">TOPOLOGY MODEL</span>
                    <span className="font-bold text-secondary truncate block">{project.specifications.architectureType}</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="bg-surface p-3.5 border-2 border-ink-deep">
                <span className="block font-mono text-xs font-bold uppercase text-stamp-red tracking-wider mb-2">
                  KEY DELIVERABLES & MECHANISMS:
                </span>
                <ul className="space-y-1.5 font-mono text-xs text-ink-deep">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stamp-red font-bold">◆</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips & Zain's Role */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t-2 border-ink-deep">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase text-on-surface-variant mb-1">
                    SUBSTRATE & TOOLCHAINS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-paper-muted text-ink-deep font-mono text-[11px] font-bold uppercase border border-ink-deep shadow-[1px_1px_0_var(--color-ink-deep)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="block font-mono text-[10px] font-bold uppercase text-on-surface-variant mb-0.5">
                    ROLE EXECUTED:
                  </span>
                  <span className="font-mono text-xs text-stamp-red font-bold block max-w-xs sm:text-right">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Seal Bar */}
            <div className="bg-surface-container-high px-4 py-2 border-t-2 border-ink-deep flex items-center justify-between font-mono text-[10px] uppercase text-on-surface-variant">
              <span>BENGALURU ROTARY DEPT. • REGISTRY RECORD VERIFIED</span>
              <button
                onClick={onClose}
                className="font-bold text-ink-deep hover:text-stamp-red transition-colors cursor-pointer"
              >
                RETURN TO BROADSHEET →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
