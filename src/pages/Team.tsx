import { motion } from 'framer-motion';
import ForestHero from '../components/ForestHero';
import ScrollReveal from '../components/ScrollReveal';
import { teamMembers } from '../data/team';

export default function Team() {
  const coChairs = teamMembers.filter(m => m.role === 'Co-Chair');
  const vpCompetitions = teamMembers.filter(m => m.department === 'Competitions');
  const vpTechnical = teamMembers.filter(m => m.department === 'Technical');
  const vpLogistics = teamMembers.filter(m => m.department === 'Logistics');
  const vpSponsorship = teamMembers.filter(m => m.department === 'Sponsorship');
  const vpFinance = teamMembers.filter(m => m.department === 'Finance');
  const vpPublications = teamMembers.filter(m => m.department === 'Publications');

  const MemberCard = ({ member, size = 'normal' }: { member: any; size?: 'large' | 'normal' }) => (
    <motion.div
      whileHover={{ y: -6, borderColor: 'rgba(90,140,82,0.5)' }}
      className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-6 text-center transition-all duration-300"
    >
      <div className={`${size === 'large' ? 'w-32 h-32' : 'w-24 h-24'} mx-auto mb-4 rounded-full bg-gradient-to-br from-moss to-fern flex items-center justify-center`}>
        <span className={`font-display text-cream ${size === 'large' ? 'text-4xl' : 'text-2xl'} font-bold`}>
          {member.initials}
        </span>
      </div>
      <h3 className={`font-sans text-cream font-bold ${size === 'large' ? 'text-2xl' : 'text-lg'} mb-1`}>
        {member.name}
      </h3>
      <p className="font-mono text-sunlight text-xs tracking-wider uppercase">
        {member.role}
      </p>
      <p className="text-cream-dim text-xs mt-3">
        {/* TODO: Add email when available */}
        [email@uwo.ca]
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <ForestHero
        title="Meet the Team"
        subtitle="WEC 2026 Executive"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cream-dim text-lg max-w-2xl mx-auto">
                The WEC 2026 organizing team is dedicated to delivering an exceptional competition experience for all participants.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center gap-8">
                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-2 gap-8 max-w-2xl">
                    {coChairs.map((member, i) => (
                      <MemberCard key={i} member={member} size="large" />
                    ))}
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-3 gap-6 max-w-3xl">
                    {vpCompetitions.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                    {vpTechnical.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                    {vpLogistics.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                    {vpSponsorship.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                    {vpFinance.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                    {vpPublications.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-20 text-center">
              <div className="border-forest backdrop-blur-sm bg-forest-mid/30 rounded-xl p-12 max-w-3xl mx-auto">
                <h3 className="font-display text-cream text-3xl font-bold mb-4">
                  Interested in Joining?
                </h3>
                <p className="text-cream-dim text-lg mb-8">
                  Applications for WEC 2027 organizing team will open in Spring 2026. Follow us on social media for updates.
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/ues_wec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-sunlight transition-colors text-lg"
                  >
                    Instagram
                  </a>
                  <span className="text-moss">·</span>
                  <a
                    href="https://www.facebook.com/UES.WEC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-sunlight transition-colors text-lg"
                  >
                    Facebook
                  </a>
                  <span className="text-moss">·</span>
                  <a
                    href="https://ca.linkedin.com/company/western-engineering-competition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-sunlight transition-colors text-lg"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
