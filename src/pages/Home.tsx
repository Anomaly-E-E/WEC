import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionDivider from '../components/SectionDivider';
import Icon from '../components/Icon';
import TeamSection from '../components/TeamSection';
import WaveDivider from '../components/WaveDivider';
import { competitions } from '../data/competitions';
import { bonusMarkGroups } from '../data/bonusMarks';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-[length:260%] sm:bg-[length:200%] md:bg-[length:140%]"
          style={{
            backgroundImage: `url('/aceb_banner1.jpg')`,
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, var(--hero-overlay-1) 0%, var(--hero-overlay-2) 50%, var(--hero-overlay-1) 100%)`,
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 65% 40%, var(--hero-glow-1), transparent)`,
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 40% 50% at 15% 85%, var(--hero-glow-2), transparent)`,
          }}
        ></div>

        <svg
          className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 250 L100 220 Q150 200 200 210 L300 180 Q400 160 500 200 L700 230 L900 210 L1200 240 L1200 300 L0 300 Z"
            fill="rgb(var(--moss-dark))"
            opacity="0.3"
          />
          <ellipse cx="150" cy="220" rx="25" ry="60" fill="rgb(var(--moss-dark))" opacity="0.25" />
          <ellipse cx="500" cy="180" rx="30" ry="80" fill="rgb(var(--moss-dark))" opacity="0.25" />
          <ellipse cx="850" cy="210" rx="20" ry="50" fill="rgb(var(--moss-dark))" opacity="0.25" />
        </svg>

        <WaveDivider fill="rgb(var(--forest-dark))" />

        <img
          src="/wec-robot-green.png"
          alt=""
          className="hidden lg:block absolute bottom-8 left-8 md:left-16 h-64 w-auto z-[6] opacity-90 critter-bob"
          style={{ animationDuration: '7s' }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-cream mb-4 md:mb-6 leading-[1.1] md:leading-none"
          >
            Grow <span className="italic text-sunlight">Beyond</span> the Forest
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-fern text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.25em] uppercase mb-6 md:mb-8 px-2"
          >
            Western Engineering Competition · Nov 21–23, 2026 · London, Ontario
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cream-dim text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-9 md:mb-12 leading-relaxed"
          >
            Compete in 10 engineering challenges. Win your way from WEC to OEC. One weekend to prove your skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Link
              to="/register"
              className="text-white cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200 bg-cta-green text-center"
            >
              Register Now
            </Link>
            <Link
              to="/competitions"
              className="border border-fern text-leaf w-full sm:w-auto px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-fern hover:text-forest-black transition-colors duration-300 text-center"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block absolute bottom-8 right-8 backdrop-forest border-forest rounded-xl p-6 text-center"
        >
          <p className="font-mono text-sunlight text-4xl font-bold mb-1">NOV</p>
          <p className="font-display text-cream text-5xl font-black mb-1">21–23</p>
          <p className="font-sans text-fern text-xl font-semibold">2026</p>
          <p className="font-mono text-cream-dim text-xs tracking-wider mt-2">LONDON, ON</p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-forest-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <ScrollReveal>
              <div>
                <p className="font-mono text-fern text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">About WEC</p>
                <h2 className="font-display text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 leading-[1.15] md:leading-none">
                  What is the Western Engineering Competition?
                </h2>
                <p className="text-cream-dim leading-relaxed mb-4">
                  WEC is Western University's premier engineering competition, bringing together students from all disciplines to compete in design, technical, and communication challenges.
                </p>
                <p className="text-cream-dim leading-relaxed mb-4">
                  Winners advance to the <strong className="text-leaf">Ontario Engineering Competition (OEC)</strong>, competing against the best from universities across the province.
                </p>
                <p className="text-cream-dim leading-relaxed">
                  Whether you're a first-year student or a graduating senior, WEC offers opportunities to test your skills, network with industry professionals, and earn bonus marks in select courses.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {[
                  { number: '10', label: 'Competition Categories' },
                  { number: '40+', label: 'Years of WEC' },
                  { number: '2', label: 'Levels (WEC→OEC)' },
                  { number: '1', label: 'Weekend to Prove It' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="border-forest bg-forest-mid/40 rounded-lg p-4 sm:p-6 text-center transition-all duration-300"
                  >
                    <p className="font-display text-sunlight text-4xl sm:text-5xl font-black mb-2">{stat.number}</p>
                    <p className="font-sans text-cream-dim text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 50%, var(--ambient-glow), transparent)`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="font-mono text-fern text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">The Pathway</p>
              <h2 className="font-display text-cream text-3xl sm:text-4xl md:text-6xl font-bold">
                Compete at Every Level
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto">
            {[
              { step: '01', name: 'WEC', full: 'Western Engineering Competition', location: 'London, ON' },
              { step: '02', name: 'OEC', full: 'Ontario Engineering Competition', location: 'Provincial' }
            ].map((level, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative border-forest bg-forest-mid/40 rounded-xl p-6 sm:p-8 transition-all duration-300 h-full overflow-hidden"
                >
                  <p className="absolute top-2 right-2 sm:top-4 sm:right-4 font-display text-moss-dark text-6xl sm:text-8xl font-black opacity-10">
                    {level.step}
                  </p>
                  <p className="font-display text-sunlight text-3xl sm:text-4xl font-black mb-2">{level.name}</p>
                  <p className="font-sans text-cream text-base sm:text-lg font-semibold mb-2">{level.full}</p>
                  <p className="font-mono text-fern text-sm tracking-wider">{level.location}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 px-6 bg-forest-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="font-mono text-fern text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">Choose Your Challenge</p>
              <h2 className="font-display text-cream text-3xl sm:text-4xl md:text-6xl font-bold">
                10 Ways to Prove Yourself
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {competitions.map((comp, i) => (
              <ScrollReveal key={comp.id} delay={i * 0.05}>
                <Link to="/competitions">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="border-forest bg-forest-mid/30 rounded-lg p-4 sm:p-6 text-center transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  >
                    <Icon name={comp.icon} className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-leaf" />
                    <h3 className="font-sans text-cream font-bold text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-sunlight transition-colors leading-snug">
                      {comp.name}
                    </h3>
                    <p className="font-mono text-fern text-xs tracking-wider">{comp.tag}</p>
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-fern/20 to-transparent group-hover:h-full transition-all duration-500 -z-10"></div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-10 md:mt-12">
              <Link
                to="/competitions"
                className="inline-block text-sunlight hover:text-gold font-sans font-semibold text-base sm:text-lg transition-colors duration-200"
              >
                See All Competition Details →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="font-mono text-fern text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">Compete & Earn</p>
              <h2 className="font-display text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                WEC Bonus Marks
              </h2>
              <p className="text-cream-dim text-base sm:text-lg">
                These courses count WEC participation toward bonus marks.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {bonusMarkGroups.map((group, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="border-forest bg-forest-mid/20 rounded-lg px-5 sm:px-6 py-4 sm:py-5 transition-all duration-300"
                >
                  <p className="font-sans text-cream font-bold text-base mb-3">{group.discipline}</p>
                  <div className="space-y-2">
                    {group.entries.map((entry) => (
                      <div key={entry.code} className="flex items-baseline justify-between gap-4">
                        <p className="font-mono text-sunlight font-bold text-base whitespace-nowrap">{entry.code}</p>
                        <p className="text-cream-dim text-xs text-right">{entry.note}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <TeamSection />

      <SectionDivider />

      <section className="py-20 md:py-32 px-6 bg-forest-dark relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-[0.13] pointer-events-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
        >
          <p className="font-display font-black text-stencil whitespace-nowrap">WEC 2026</p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-display text-cream text-4xl sm:text-5xl md:text-7xl font-bold mb-5 md:mb-8">
              Ready to Compete?
            </h2>
            <p className="text-cream-dim text-base sm:text-xl mb-9 md:mb-12 max-w-2xl mx-auto">
              Register now for WEC 2026 and take the first step toward provincial competition.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center px-4 sm:px-0">
              <Link
                to="/register"
                className="text-white cursor-pointer w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 rounded-full font-sans font-bold text-base sm:text-xl hover:scale-105 transition-transform duration-200 inline-block bg-cta-green"
              >
                Participant Registration
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-9 md:mt-12">
              <a
                href="https://www.westernengineeringcompetition.ca/_files/ugd/a0d860_61bcb40f0b2e4e8789b565b7b3da607c.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-sunlight transition-colors text-sm sm:text-base font-sans underline"
              >
                Download Sponsorship Package
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
