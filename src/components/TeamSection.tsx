import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Icon from './Icon';
import { teamMembers, type TeamMember } from '../data/team';

function CoChairCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="border-forest bg-moss-dark rounded-xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row"
    >
      <div className="w-full h-32 sm:h-40 md:h-auto md:w-2/5 flex-shrink-0">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover"
            style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-moss to-fern flex items-center justify-center py-4 md:py-10">
            <span className="font-display text-card-text text-2xl md:text-5xl font-bold">
              {member.initials}
            </span>
          </div>
        )}
      </div>
      <div className="w-full md:w-3/5 p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
          <p className="font-mono text-card-accent text-[10px] md:text-xs tracking-wider uppercase">
            {member.role}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-card-text/60 hover:text-card-accent transition-colors flex items-center"
            >
              <Icon name="linkedin" className="w-3.5 h-3.5 md:w-5 md:h-5" />
            </a>
          )}
        </div>
        <h3 className="font-display text-card-text font-bold text-sm sm:text-base md:text-2xl mb-0.5 md:mb-2 leading-tight">
          {member.name}
        </h3>
        {member.yearDiscipline && (
          <p className="font-mono text-card-text/70 text-[10px] md:text-xs">
            {member.yearDiscipline}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="border-forest bg-moss-dark rounded-xl p-3 md:p-6 flex flex-col items-center text-center md:block transition-all duration-300"
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          width={96}
          height={96}
          loading="lazy"
          className="w-14 h-14 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 rounded-full object-cover flex-shrink-0"
          style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
        />
      ) : (
        <div className="w-14 h-14 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 rounded-full bg-gradient-to-br from-moss to-fern flex items-center justify-center flex-shrink-0">
          <span className="font-display text-card-text text-base md:text-2xl font-bold">
            {member.initials}
          </span>
        </div>
      )}
      <h3 className="font-sans text-card-text font-bold text-xs sm:text-sm md:text-lg mb-0.5 md:mb-1 leading-tight">
        {member.name}
      </h3>
      <div className="flex items-center justify-center gap-1 md:gap-1.5">
        <p className="font-mono text-card-accent text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase">
          {member.role}
        </p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-card-text/60 hover:text-card-accent transition-colors flex items-center"
          >
            <Icon name="linkedin" className="w-3 h-3 md:w-5 md:h-5" />
          </a>
        )}
      </div>
      {member.yearDiscipline && (
        <p className="font-mono text-card-text/70 text-[9px] sm:text-[10px] md:text-xs mt-0.5 md:mt-1">
          {member.yearDiscipline}
        </p>
      )}
    </motion.div>
  );
}

export default function TeamSection() {
  const coChairs = teamMembers.filter(m => m.role === 'Co-Chair');
  const vpCompetitions = teamMembers.filter(m => m.department === 'Competitions');
  const vpTechnical = teamMembers.filter(m => m.department === 'Technical');
  const turner = vpTechnical.find(m => m.name === 'Turner Reucassel');
  const arshan = vpTechnical.find(m => m.name === 'Arshan Shareef');
  const vpLogistics = teamMembers.filter(m => m.department === 'Logistics');
  const vpSponsorship = teamMembers.filter(m => m.department === 'Sponsorship');
  const vpFinance = teamMembers.filter(m => m.department === 'Finance');
  const vpPublications = teamMembers.filter(m => m.department === 'Publications');

  const leadRow = [turner, arshan, ...vpFinance, ...vpPublications].filter(Boolean) as TeamMember[];
  const supportRow = [...vpCompetitions, ...vpSponsorship, ...vpLogistics];
  const supportRowMain = supportRow.slice(0, -1);
  const supportRowLast = supportRow[supportRow.length - 1];

  const desktopRowA = [arshan, ...vpPublications].filter(Boolean) as TeamMember[];
  const desktopRowB = [turner, ...vpFinance, vpCompetitions[0]].filter(Boolean) as TeamMember[];
  const desktopRowC = [...vpCompetitions.slice(1), ...vpSponsorship, ...vpLogistics];

  return (
    <section id="team" className="py-16 md:py-24 px-6 bg-forest-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-fern text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">The People Behind WEC</p>
            <h2 className="font-display text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-cream-dim text-base sm:text-lg max-w-2xl mx-auto">
              The WEC 2026 organizing team is dedicated to delivering an exceptional competition experience for all participants.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3 md:gap-6 mb-8">
            {coChairs.map((member, i) => (
              <CoChairCard key={i} member={member} />
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile layout — kept exactly as-is */}
        <ScrollReveal delay={0.3} className="md:hidden">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 gap-3 max-w-4xl w-full">
                {leadRow.map((member, i) => {
                  const mobileOrder = ['order-3', 'order-1', 'order-4', 'order-2'][i];
                  return (
                    <div key={i} className={mobileOrder}>
                      <MemberCard member={member} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 gap-3 max-w-3xl w-full">
                {supportRowMain.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>

            {supportRowLast && (
              <div className="w-full flex justify-center">
                <div className="w-[calc(50%-0.375rem)]">
                  <MemberCard member={supportRowLast} />
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Desktop layout — Arshan+Bridget, then Turner+Kevin+1 VP Competitions, then the rest */}
        <ScrollReveal delay={0.3} className="hidden md:block">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-lg w-auto">
                {desktopRowA.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-3 gap-6 max-w-3xl w-auto">
                {desktopRowB.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-6 gap-6 max-w-6xl w-auto">
                {desktopRowC.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
