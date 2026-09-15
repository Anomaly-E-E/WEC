import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import { sponsors } from '../data/sponsors';

const tiers = ['Platinum', 'Diamond', 'Silver', 'Supporter'] as const;

const tierCardHeight: Record<(typeof tiers)[number], string> = {
  Platinum: 'h-36 sm:h-44',
  Diamond: 'h-32 sm:h-40',
  Silver: 'h-28 sm:h-32',
  Supporter: 'h-24 sm:h-28'
};

const tierGridCols: Record<(typeof tiers)[number], string> = {
  Platinum: 'grid-cols-1 max-w-md mx-auto',
  Diamond: 'grid-cols-1 max-w-md mx-auto',
  Silver: 'grid-cols-1 max-w-sm mx-auto',
  Supporter: 'grid-cols-2 max-w-xl mx-auto'
};

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="Our Sponsors"
        subtitle="Making WEC 2026 Possible"
      />

      <section className="pt-6 pb-16 md:pt-8 md:pb-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-6 sm:p-8 text-center">
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
            <div className="mt-10 md:mt-14">
              <h3 className="font-display text-leaf text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8">
                Our Partners
              </h3>

              {tiers.map((tier) => {
                const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
                if (tierSponsors.length === 0) return null;

                return (
                  <div key={tier} className="mb-8 md:mb-10">
                    <p className="font-display text-sunlight text-sm sm:text-base font-bold uppercase tracking-widest text-center mb-3 sm:mb-4">
                      {tier}
                    </p>
                    <div className={`grid ${tierGridCols[tier]} gap-4 sm:gap-6`}>
                      {tierSponsors.map((sponsor) => (
                        <motion.div
                          key={sponsor.name}
                          whileHover={{ y: -6 }}
                          className={`border-forest bg-white rounded-xl ${tierCardHeight[tier]} flex items-center justify-center px-8 sm:px-10 py-5 transition-all duration-300`}
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
