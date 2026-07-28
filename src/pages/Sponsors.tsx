import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="Our Sponsors"
        subtitle="Making WEC 2026 Possible"
      />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cream-dim text-lg max-w-3xl mx-auto leading-relaxed">
                WEC relies on industry partners to make this event possible. Sponsors gain direct access to top engineering talent at Western University through judging, networking, and brand visibility.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-16 text-center">
              <h2 className="font-display text-cream text-4xl font-bold mb-8">
                Become a Sponsor
              </h2>
              <p className="text-cream-dim text-lg mb-10 max-w-2xl mx-auto">
                Partner with WEC 2026 to connect with the next generation of engineers. Download our sponsorship package to learn about opportunities and benefits.
              </p>
              <a
                href="https://www.westernengineeringcompetition.ca/_files/ugd/a0d860_61bcb40f0b2e4e8789b565b7b3da607c.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sunlight text-forest-dark px-10 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                Download Sponsorship Package
              </a>
            </div>
          </ScrollReveal>

          {/* TODO: Add sponsor logos here when confirmed */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20">
              <h3 className="font-display text-leaf text-3xl font-bold text-center mb-12">
                Our Partners
              </h3>
              <div className="text-center text-cream-dim">
                <p className="mb-4">Sponsor announcements coming soon.</p>
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
