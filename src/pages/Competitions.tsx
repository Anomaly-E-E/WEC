import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ForestHero from '../components/ForestHero';
import Icon from '../components/Icon';
import { competitions } from '../data/competitions';

export default function Competitions() {
  return (
    <div className="min-h-screen">
      <ForestHero
        title="The Competitions"
        subtitle="10 challenges · 1 weekend · Infinite possibilities"
      />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((comp) => (
              <motion.div
                key={comp.id}
                className="border-forest bg-forest-mid/30 rounded-xl p-8 h-full transition-all duration-300"
                whileHover={{ y: -6, borderColor: 'rgba(90,140,82,0.5)' }}
              >
                <div className="flex items-center gap-6 mb-4">
                  <Icon name={comp.icon} className="w-10 h-10 text-leaf" />
                  <div>
                    <h3 className="font-sans text-cream font-bold text-2xl mb-1">
                      {comp.name}
                    </h3>
                    <p className="font-mono text-fern text-xs tracking-wider uppercase">
                      {comp.tag}
                    </p>
                  </div>
                </div>

                <p className="text-cream-dim leading-relaxed text-lg mb-6">
                  {comp.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-sans text-sunlight font-semibold text-xs uppercase tracking-wider mb-1">
                      Eligibility
                    </h4>
                    <p className="text-cream-dim text-sm">{comp.eligibility}</p>
                  </div>

                  <div>
                    <h4 className="font-sans text-sunlight font-semibold text-xs uppercase tracking-wider mb-1">
                      Team Size
                    </h4>
                    <p className="text-cream-dim text-sm">{comp.teamSize}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-sunlight font-semibold text-xs uppercase tracking-wider mb-1">
                    Judged on
                  </h4>
                  <p className="text-cream-dim text-sm">
                    {comp.judgingCriteria.join(', ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-display text-cream text-3xl font-bold mb-6">
              Ready to Register?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-cta-green text-white cursor-pointer px-8 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: 'rgb(var(--cta-green))' }}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
