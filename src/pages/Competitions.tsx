import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import { competitions } from '../data/competitions';

export default function Competitions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <ForestHero
        title="The Competitions"
        subtitle="10 challenges · 1 weekend · Infinite possibilities"
      />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-cream-dim text-lg text-center mb-16 max-w-3xl mx-auto">
              Choose your competition based on your discipline, interests, and year level. Each category offers unique challenges designed to test different engineering skills.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {competitions.map((comp, i) => (
              <ScrollReveal key={comp.id} delay={i * 0.05}>
                <motion.div
                  className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ borderColor: 'rgba(90,140,82,0.4)' }}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === comp.id ? null : comp.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-forest-canopy/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-5xl">{comp.emoji}</span>
                      <div>
                        <h3 className="font-sans text-cream font-bold text-2xl mb-1">
                          {comp.name}
                        </h3>
                        <p className="font-mono text-fern text-xs tracking-wider uppercase">
                          {comp.tag}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedId === comp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sunlight text-3xl"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expandedId === comp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-forest">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-sans text-sunlight font-semibold text-sm uppercase tracking-wider mb-2">
                                About
                              </h4>
                              <p className="text-cream-dim leading-relaxed">
                                {comp.description}
                              </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-sans text-sunlight font-semibold text-sm uppercase tracking-wider mb-2">
                                  Eligibility
                                </h4>
                                <p className="text-cream-dim">{comp.eligibility}</p>
                              </div>

                              <div>
                                <h4 className="font-sans text-sunlight font-semibold text-sm uppercase tracking-wider mb-2">
                                  Team Size
                                </h4>
                                <p className="text-cream-dim">{comp.teamSize}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-sans text-sunlight font-semibold text-sm uppercase tracking-wider mb-3">
                                Judging Criteria
                              </h4>
                              <ul className="space-y-2">
                                {comp.judgingCriteria.map((criteria, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <span className="text-fern mt-1">▸</span>
                                    <span className="text-cream-dim">{criteria}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-16 text-center">
              <h3 className="font-display text-cream text-3xl font-bold mb-6">
                Ready to Register?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=TaaTrQ2tzU6y_eU84Vllvojv0C3AKvxMnZrNlCc3fx9URDdYS1FaN0lFMDM2UklUNkRVS1ZVSTVPVy4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sunlight text-forest-dark px-8 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200"
                >
                  Register Now
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
