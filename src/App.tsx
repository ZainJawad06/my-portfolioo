/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BroadsheetHeader, PageTab } from './components/BroadsheetHeader';
import { BroadsheetFooter } from './components/BroadsheetFooter';
import { BlueprintModal } from './components/BlueprintModal';
import { GazettePage } from './components/pages/GazettePage';
import { DispatchesPage } from './components/pages/DispatchesPage';
import { ChroniclePage } from './components/pages/ChroniclePage';
import { ManualPage } from './components/pages/ManualPage';
import { CredentialsPage } from './components/pages/CredentialsPage';
import { Project } from './data/portfolioData';
import { getSoundEnabled, setSoundEnabled } from './utils/vintageAudio';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('the-gazette');
  const [selectedBlueprint, setSelectedBlueprint] = useState<Project | null>(null);
  const [soundActive, setSoundActive] = useState<boolean>(true);
  const [grainActive, setGrainActive] = useState<boolean>(true);

  useEffect(() => {
    setSoundActive(getSoundEnabled());
  }, []);

  const handleToggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  const handleToggleGrain = () => {
    setGrainActive(!grainActive);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface newspaper-grid relative selection:bg-secondary-container selection:text-ink-deep">
      {/* Optional Vintage Paper Fibers & Film Grain Layer */}
      {grainActive && (
        <div
          className="fixed inset-0 pointer-events-none z-30 vintage-paper-fibers"
          aria-hidden="true"
        />
      )}

      {/* Fixed Broadsheet Masthead Header with Scrub-Scroll Needle */}
      <BroadsheetHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        soundActive={soundActive}
        onToggleSound={handleToggleSound}
        grainActive={grainActive}
        onToggleGrain={handleToggleGrain}
      />

      {/* Main Newspaper Content Area with Smooth Page Transitions */}
      <main className="w-full pt-32 sm:pt-36">
        <AnimatePresence mode="wait">
          {activeTab === 'the-gazette' && (
            <motion.div
              key="the-gazette"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <GazettePage
                onNavigateTab={setActiveTab}
                onOpenBlueprint={setSelectedBlueprint}
              />
            </motion.div>
          )}

          {activeTab === 'dispatches' && (
            <motion.div
              key="dispatches"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <DispatchesPage
                onOpenBlueprint={setSelectedBlueprint}
                onNavigateTab={setActiveTab}
              />
            </motion.div>
          )}

          {activeTab === 'chronicle' && (
            <motion.div
              key="chronicle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChroniclePage onNavigateTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'manual' && (
            <motion.div
              key="manual"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ManualPage onNavigateTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'credentials' && (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <CredentialsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Broadsheet Footer */}
      <BroadsheetFooter onNavigateTab={setActiveTab} />

      {/* Interactive Blueprint Inspector Modal */}
      <BlueprintModal
        project={selectedBlueprint}
        onClose={() => setSelectedBlueprint(null)}
      />
    </div>
  );
}
