import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import ForestCritter from '../components/ForestCritter';

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="Our Sponsors"
        subtitle="Making WEC 2026 Possible"
      />

      <section className="pt-8 pb-24 px-6 relative overflow-hidden">
        <div
          className="hidden lg:block absolute bottom-16 left-12 w-28 h-28 opacity-90 pointer-events-none critter-bob"
          style={{ animationDuration: '6.1s', animationDelay: '0.8s' }}
        >
          <ForestCritter variant="squirrel" className="w-full h-full" />
        </div>
        <div
          className="hidden lg:block absolute top-8 right-1/4 w-24 h-24 opacity-90 pointer-events-none critter-bob"
          style={{ animationDuration: '4.8s', animationDelay: '1.4s' }}
        >
          <ForestCritter variant="owl" className="w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-8 text-center">
              <h2 className="font-display text-cream text-3xl font-bold mb-4">
                Become a Sponsor
              </h2>
              <p className="text-cream-dim text-base mb-6 max-w-2xl mx-auto">
                Partner with WEC 2026 to connect with the next generation of engineers. Download our sponsorship package to learn about opportunities and benefits.
              </p>
              <a
                href="https://www.westernengineeringcompetition.ca/_files/ugd/a0d860_61bcb40f0b2e4e8789b565b7b3da607c.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sunlight text-cream px-10 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                Download Sponsorship Package
              </a>
            </div>
          </ScrollReveal>

          {/* TODO: Swap placeholder cards for confirmed sponsor logos */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20">
              <h3 className="font-display text-leaf text-3xl font-bold text-center mb-12">
                Our Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six'].map((name) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -6, borderColor: 'rgba(76,131,76,0.5)' }}
                    className="border-forest bg-forest-mid/30 rounded-xl h-28 flex items-center justify-center transition-all duration-300"
                  >
                    <span className="font-display text-cream-dim text-xl font-bold">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center text-cream-dim">
                <p className="text-sm">
                  Interested in sponsoring WEC 2026? Contact us at{' '}
                  <span className="text-sunlight">[sponsorship@wec.ca]</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
