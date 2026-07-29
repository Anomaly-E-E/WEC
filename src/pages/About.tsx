import { Link } from 'react-router-dom';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import ForestCritter from '../components/ForestCritter';

export default function About() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="About WEC"
        subtitle="Western's Premier Engineering Competition"
      />

      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="hidden lg:block absolute top-20 right-14 w-28 h-28 opacity-90 pointer-events-none critter-bob"
          style={{ animationDuration: '5.6s', animationDelay: '0.3s' }}
        >
          <ForestCritter variant="rabbit" className="w-full h-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-display text-cream text-4xl font-bold mb-6">
                What is WEC?
              </h2>
              <div className="text-cream-dim text-lg leading-relaxed space-y-4">
                <p>
                  The Western Engineering Competition (WEC) is an annual event that brings together engineering students from all disciplines to compete in design, technical, and communication challenges.
                </p>
                <p>
                  Since its inception over 40 years ago, WEC has been a cornerstone of Western Engineering's competitive culture, providing students with opportunities to apply their knowledge, develop professional skills, and connect with industry partners.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mb-16">
              <h2 className="font-display text-cream text-4xl font-bold mb-6">
                The Competition Pathway
              </h2>
              <div className="space-y-8">
                <div className="border-forest bg-forest-mid/30 rounded-lg p-8">
                  <h3 className="font-sans text-sunlight text-2xl font-bold mb-3">
                    WEC → Western Engineering Competition
                  </h3>
                  <p className="text-cream-dim leading-relaxed">
                    Compete against your peers at Western University. Winners in each category advance to the provincial level.
                  </p>
                </div>

                <div className="border-forest bg-forest-mid/30 rounded-lg p-8">
                  <h3 className="font-sans text-sunlight text-2xl font-bold mb-3">
                    OEC → Ontario Engineering Competition
                  </h3>
                  <p className="text-cream-dim leading-relaxed">
                    Represent Western against teams from universities across Ontario.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mb-16">
              <h2 className="font-display text-cream text-4xl font-bold mb-6">
                Why Compete?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Skill Development',
                    description: 'Apply theoretical knowledge to real-world challenges and develop practical engineering skills.'
                  },
                  {
                    title: 'Networking',
                    description: 'Connect with industry professionals, judges, and fellow students passionate about engineering.'
                  },
                  {
                    title: 'Bonus Marks',
                    description: 'Earn bonus marks in participating courses for your WEC involvement.'
                  },
                  {
                    title: 'Career Opportunities',
                    description: 'Showcase your abilities to potential employers and build your professional portfolio.'
                  }
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="border-forest backdrop-blur-sm bg-forest-mid/20 rounded-lg p-6"
                  >
                    <h3 className="font-sans text-leaf text-xl font-bold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-cream-dim">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-12">
              <h2 className="font-display text-cream text-3xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-cream-dim text-lg mb-8">
                Explore our competitions and register for WEC 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/competitions"
                  className="bg-sunlight text-cream px-8 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200"
                >
                  View Competitions
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-fern text-leaf px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-fern hover:text-cream transition-colors duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
