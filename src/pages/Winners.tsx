import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import { winners2024_2025, winners2023_2024, winnersOEC2024, type WinnerEntry } from '../data/winners';

type WinnersTab = '2025-2026' | '2024-2025' | '2023-2024' | 'oec-2024';

const isWinnersTab = (value: string | undefined): value is WinnersTab =>
  value === '2025-2026' || value === '2024-2025' || value === '2023-2024' || value === 'oec-2024';

function WinnerCard({ entry }: { entry: WinnerEntry }) {
  const placeColor = entry.place.startsWith('1st')
    ? 'text-sunlight'
    : entry.place.startsWith('2nd')
    ? 'text-leaf'
    : entry.place.startsWith('3rd')
    ? 'text-fern'
    : 'text-gold';

  return (
    <div className="border-forest bg-forest-mid/30 rounded-lg overflow-hidden">
      {entry.photo && (
        <img
          src={entry.photo}
          alt={entry.teamName || `${entry.category} ${entry.place}`}
          loading="lazy"
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-5">
        <p className={`font-mono text-xs uppercase tracking-wider font-bold mb-1 ${placeColor}`}>
          {entry.place}
        </p>
        <p className="font-mono text-fern text-xs uppercase tracking-wider mb-3">
          {entry.category}
        </p>
        {entry.teamName && (
          <h4 className="font-sans text-cream font-bold text-lg mb-1">{entry.teamName}</h4>
        )}
        {entry.members.length > 0 && (
          <p className="text-cream-dim text-sm">{entry.members.join(', ')}</p>
        )}
        {entry.note && (
          <p className="text-cream-dim text-xs mt-2 italic">{entry.note}</p>
        )}
      </div>
    </div>
  );
}

function WinnersGrid({ entries }: { entries: WinnerEntry[] }) {
  return (
    <ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {entries.map((entry, i) => (
          <WinnerCard key={i} entry={entry} />
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function Winners() {
  const { year } = useParams<{ year: string }>();
  const [activeTab, setActiveTab] = useState<WinnersTab>(isWinnersTab(year) ? year : '2025-2026');
  const [prevYear, setPrevYear] = useState(year);

  if (year !== prevYear) {
    setPrevYear(year);
    if (isWinnersTab(year)) {
      setActiveTab(year);
    }
  }

  const tabs: { id: WinnersTab; label: string }[] = [
    { id: '2025-2026', label: '2025–2026 Winners' },
    { id: '2024-2025', label: '2024–2025 Winners' },
    { id: '2023-2024', label: '2023–2024 Winners' },
    { id: 'oec-2024', label: 'OEC 2024 Winners' },
  ];

  return (
    <div className="min-h-screen">
      <ForestHero
        title="Past Winners"
        subtitle="Celebrating Excellence"
      />

      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 md:mb-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center min-h-[44px] px-4 py-2 sm:px-8 sm:py-3 rounded-full font-sans font-semibold text-sm sm:text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-sunlight text-forest-black'
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
                <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-8 sm:p-12 md:p-16">
                  <h2 className="font-display text-cream text-2xl sm:text-3xl font-bold mb-4">
                    WEC 2026 Coming Soon
                  </h2>
                  <p className="text-cream-dim text-base sm:text-lg mb-8">
                    Winners will be announced after the competition on November 27–29, 2026.
                  </p>
                  <Link
                    to="/register"
                    className="inline-block text-white cursor-pointer px-8 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform duration-200 bg-cta-green"
                  >
                    Register for WEC 2026
                  </Link>
                </div>
              </div>
            )}

            {activeTab === '2024-2025' && (
              <div>
                <h3 className="font-display text-sunlight text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
                  WEC 2024–2025 Winners
                </h3>
                <WinnersGrid entries={winners2024_2025} />
              </div>
            )}

            {activeTab === '2023-2024' && (
              <div>
                <h3 className="font-display text-sunlight text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
                  WEC 2023–2024 Winners
                </h3>
                <WinnersGrid entries={winners2023_2024} />
              </div>
            )}

            {activeTab === 'oec-2024' && (
              <div>
                <h3 className="font-display text-sunlight text-xl sm:text-2xl font-bold mb-2 text-center">
                  Ontario Engineering Competition 2024
                </h3>
                <p className="font-mono text-fern text-xs tracking-wider uppercase text-center mb-6 sm:mb-8">
                  Western Engineering Winners
                </p>
                <WinnersGrid entries={winnersOEC2024} />
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
