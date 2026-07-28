import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { teamMembers, type TeamMember } from '../data/team';

export default function TeamSection() {
  const coChairs = teamMembers.filter(m => m.role === 'Co-Chair');
  const vpCompetitions = teamMembers.filter(m => m.department === 'Competitions');
  const vpTechnical = teamMembers.filter(m => m.department === 'Technical');
  const vpLogistics = teamMembers.filter(m => m.department === 'Logistics');
  const vpSponsorship = teamMembers.filter(m => m.department === 'Sponsorship');
  const vpFinance = teamMembers.filter(m => m.department === 'Finance');
  const vpPublications = teamMembers.filter(m => m.department === 'Publications');

  const CoChairCard = ({ member }: { member: TeamMember }) => (
    <motion.div
      whileHover={{ y: -6, borderColor: 'rgba(90,140,82,0.5)' }}
      className="border-forest bg-forest-mid/20 rounded-xl overflow-hidden transition-all duration-300 flex"
    >
      <div className="w-2/5 bg-gradient-to-br from-moss to-fern flex items-center justify-center py-10">
        <span className="font-display text-cream text-5xl font-bold">
          {member.initials}
        </span>
      </div>
      <div className="w-3/5 p-6 flex flex-col justify-center">
        <p className="font-mono text-sunlight text-xs tracking-wider uppercase mb-2">
          {member.role}
        </p>
        <h3 className="font-display text-cream font-bold text-2xl mb-2">
          {member.name}
        </h3>
        {member.yearDiscipline && (
          <p className="font-mono text-cream-dim/70 text-xs tracking-wide">
            {member.yearDiscipline}
          </p>
        )}
      </div>
    </motion.div>
  );

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <motion.div
      whileHover={{ y: -6, borderColor: 'rgba(90,140,82,0.5)' }}
      className="border-forest bg-forest-mid/30 rounded-xl p-6 text-center transition-all duration-300"
    >
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-moss to-fern flex items-center justify-center">
        <span className="font-display text-cream text-2xl font-bold">
          {member.initials}
        </span>
      </div>
      <h3 className="font-sans text-cream font-bold text-lg mb-1">
        {member.name}
      </h3>
      <p className="font-mono text-sunlight text-xs tracking-wider uppercase">
        {member.role}
      </p>
      {member.yearDiscipline && (
        <p className="font-mono text-cream-dim/70 text-xs tracking-wide mt-1">
          {member.yearDiscipline}
        </p>
      )}
    </motion.div>
  );

  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-fern text-xs tracking-[0.3em] uppercase mb-4">The People Behind WEC</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-cream-dim text-lg max-w-2xl mx-auto">
              The WEC 2026 organizing team is dedicated to delivering an exceptional competition experience for all participants.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {coChairs.map((member, i) => (
              <CoChairCard key={i} member={member} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center gap-6">
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
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div id="join" className="mt-20 text-center">
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
  );
}
