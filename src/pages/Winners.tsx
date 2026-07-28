import { useState } from 'react';
import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';

type WinnersTab = '2025-2026' | '2024-2025' | 'oec-2025';

export default function Winners() {
  const [activeTab, setActiveTab] = useState<WinnersTab>('2025-2026');

  const tabs: { id: WinnersTab; label: string }[] = [
    { id: '2025-2026', label: '2025–2026 Winners' },
    { id: '2024-2025', label: '2024–2025 Winners' },
    { id: 'oec-2025', label: 'OEC 2025 Winners' },
  ];

  return (
    <div className="min-h-screen">
      <ForestHero
        title="Past Winners"
        subtitle="Celebrating Excellence"
      />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full font-sans font-semibold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-sunlight text-forest-dark'
                      : 'border border-forest text-cream hover:border-fern hover:text-fern'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-[400px]"
          >
            {activeTab === '2025-2026' && (
              <div className="text-center">
                <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-16">
                  <h2 className="font-display text-cream text-3xl font-bold mb-4">
                    WEC 2026 Coming Soon
                  </h2>
                  <p className="text-cream-dim text-lg mb-8">
                    Winners will be announced after the competition on November 21–23, 2026.
                  </p>
                  <a
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=TaaTrQ2tzU6y_eU84Vllvojv0C3AKvxMnZrNlCc3fx9URDdYS1FaN0lFMDM2UklUNkRVS1ZVSTVPVy4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-sunlight text-forest-dark px-8 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform duration-200"
                  >
                    Register for WEC 2026
                  </a>
                </div>
              </div>
            )}

            {activeTab === '2024-2025' && (
              <div>
                <ScrollReveal>
                  <div className="mb-8">
                    <h3 className="font-display text-sunlight text-2xl font-bold mb-6 text-center">
                      WEC 2024–2025 Winners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-lg p-8">
                        <div className="text-4xl mb-4">📊</div>
                        <h4 className="font-sans text-cream text-xl font-bold mb-2">
                          Consulting
                        </h4>
                        <p className="text-cream-dim mb-2">
                          <strong className="text-leaf">Nicholas Crees</strong>
                        </p>
                        <p className="text-cream-dim">
                          <strong className="text-leaf">Mike Botelho</strong>
                        </p>
                      </div>

                      {/* TODO: Add other 2024-2025 winners when data is available */}
                      <div className="border-forest backdrop-blur-sm bg-forest-mid/20 rounded-lg p-8 flex items-center justify-center">
                        <p className="text-cream-dim text-center">
                          Additional winners to be added
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {activeTab === 'oec-2025' && (
              <div className="text-center">
                <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-16">
                  <h2 className="font-display text-cream text-3xl font-bold mb-4">
                    OEC 2025 Results
                  </h2>
                  <p className="text-cream-dim text-lg">
                    {/* TODO: Add OEC 2025 results when available */}
                    Results will be added once the competition concludes.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
