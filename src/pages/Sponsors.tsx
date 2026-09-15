import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import { sponsors } from '../data/sponsors';

const tiers = ['Platinum', 'Diamond', 'Silver', 'Supporter'] as const;

const tierCardHeight: Record<(typeof tiers)[number], string> = {
  Platinum: 'h-44 sm:h-56 md:h-64',
  Diamond: 'h-40 sm:h-52 md:h-60',
  Silver: 'h-36 sm:h-44 md:h-48',
  Supporter: 'h-28 sm:h-36 md:h-40'
};

const tierGridCols: Record<(typeof tiers)[number], string> = {
  Platinum: 'grid-cols-1 max-w-xl mx-auto',
  Diamond: 'grid-cols-1 max-w-xl mx-auto',
  Silver: 'grid-cols-1 max-w-lg mx-auto',
  Supporter: 'grid-cols-2 max-w-2xl mx-auto'
};

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="Our Sponsors"
        subtitle="Making WEC 2026 Possible"
      />

      <section className="pt-6 pb-16 md:pt-8 md:pb-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-cream text-2xl sm:text-3xl font-bold mb-4">
                Become a Sponsor
              </h2>
              <p className="text-cream-dim text-base mb-6 max-w-2xl mx-auto">
                Partner with WEC 2026 to connect with the next generation of engineers. Download our sponsorship package to learn about opportunities and benefits.
              </p>
              <a
                href="/wec-sponsorship-package.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-sunlight text-forest-black px-6 sm:px-10 py-4 rounded-full font-sans font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-200"
              >
                Download Sponsorship Package
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 md:mt-24">
              <h3 className="font-display text-leaf text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
                Our Partners
              </h3>

              {tiers.map((tier) => {
                const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
                if (tierSponsors.length === 0) return null;

                return (
                  <div key={tier} className="mb-10 md:mb-14">
                    <p className="font-display text-sunlight text-base sm:text-lg font-bold uppercase tracking-widest text-center mb-4 sm:mb-6">
                      {tier}
                    </p>
                    <div className={`grid ${tierGridCols[tier]} gap-5 sm:gap-8`}>
                      {tierSponsors.map((sponsor) => (
                        <motion.div
                          key={sponsor.name}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className={`border-forest bg-white rounded-2xl shadow-lg hover:shadow-2xl ${tierCardHeight[tier]} flex items-center justify-center px-10 sm:px-14 py-7 sm:py-9 transition-all duration-300`}
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="text-center text-cream-dim">
                <p className="text-sm">
                  Interested in sponsoring WEC 2026? Contact us on{' '}
                  <a
                    href="https://www.instagram.com/ues_wec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sunlight hover:underline"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
