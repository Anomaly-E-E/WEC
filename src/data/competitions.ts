import type { IconName } from '../components/Icon';

export interface Competition {
  id: string;
  name: string;
  icon: IconName;
  tag: string;
  teaser: string;
  description: string;
  eligibility: string;
  teamSize: string;
  judgingCriteria: string[];
}

export const competitions: Competition[] = [
  {
    id: 'junior-design',
    name: 'Junior Design',
    icon: 'sprout',
    tag: 'Year 1–2',
    teaser: 'Design challenge for first and second-year engineering students',
    description: 'Junior Design tests the creativity and problem-solving skills of early-year engineering students. Teams are given a design problem and must create a functional prototype within the competition timeframe using limited materials and tools.',
    eligibility: 'Open to students in Year 1 or Year 2 of any engineering program',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Creativity and innovation in design approach',
      'Functionality and performance of prototype',
      'Effective use of materials and resources',
      'Quality of design presentation and documentation',
      'Teamwork and time management'
    ]
  },
  {
    id: 'senior-design',
    name: 'Senior Design',
    icon: 'compass',
    tag: 'All Years',
    teaser: 'Advanced engineering design challenge for all students',
    description: 'Senior Design is an intensive engineering design competition where teams tackle complex, real-world problems. Competitors must demonstrate advanced technical skills, innovative thinking, and professional presentation abilities.',
    eligibility: 'Open to all engineering students',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Technical complexity and feasibility',
      'Innovation and originality',
      'Professional-quality documentation',
      'Presentation clarity and persuasiveness',
      'Real-world applicability and impact'
    ]
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'code',
    tag: 'All Years',
    teaser: 'Algorithmic problem-solving and software development',
    description: 'The Programming competition challenges students to solve complex algorithmic problems and develop working software solutions under time pressure. Teams must demonstrate strong coding skills, debugging abilities, and software engineering best practices.',
    eligibility: 'Open to all engineering students',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Correctness and efficiency of algorithms',
      'Code quality and documentation',
      'Problem-solving approach',
      'Handling of edge cases',
      'Time and space complexity optimization'
    ]
  },
  {
    id: 'innovative-design',
    name: 'Innovative Design',
    icon: 'bulb',
    tag: 'All Years',
    teaser: 'Push the boundaries of creativity and invention',
    description: 'Innovative Design challenges teams to develop completely original solutions to open-ended problems. This competition emphasizes creativity, out-of-the-box thinking, and the ability to develop novel approaches that haven\'t been tried before.',
    eligibility: 'Open to all engineering students',
    teamSize: '6 students per team',
    judgingCriteria: [
      'Novelty and originality of concept',
      'Creative problem-solving approach',
      'Feasibility and practicality',
      'Potential impact and scalability',
      'Quality of prototype and presentation'
    ]
  },
  {
    id: 're-engineering',
    name: 'Re-Engineering',
    icon: 'refresh',
    tag: 'All Years',
    teaser: 'Redesign an existing product for a new purpose',
    description: 'Re-Engineering challenges teams to take an existing product or technology and redesign it for a new purpose or environment. Teams build a prototype, write a report, and present their redesign to a panel of judges, showing how their changes work, why they are feasible, and how they could be used in the real world.',
    eligibility: 'Open to all engineering students',
    teamSize: '2 students per team',
    judgingCriteria: [
      'Functionality of proposed changes',
      'Environmental, social and economic feasibility',
      'Technical feasibility',
      'Real-world applicability',
      'Report and presentation quality'
    ]
  },
  {
    id: 'civil-design',
    name: 'Civil Design',
    icon: 'column',
    tag: 'Civil Eng',
    teaser: 'Infrastructure and structural engineering challenges',
    description: 'Civil Design focuses on infrastructure, structural analysis, and construction challenges. Teams must apply civil engineering principles to design and potentially build scaled models of structures, considering factors like load distribution, materials, and environmental impact.',
    eligibility: 'Open to Civil Engineering students',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Structural integrity and safety',
      'Appropriate use of civil engineering principles',
      'Sustainability and environmental considerations',
      'Cost-effectiveness and practicality',
      'Technical documentation quality'
    ]
  },
  {
    id: 'chemical-design',
    name: 'Chemical Design',
    icon: 'flask',
    tag: 'Chem Eng',
    teaser: 'Process design and chemical engineering solutions',
    description: 'Chemical Design tests knowledge of chemical processes, reactor design, and process optimization. Teams develop solutions to problems involving chemical reactions, separation processes, or process control while considering safety, efficiency, and environmental impact.',
    eligibility: 'Open to Chemical Engineering students',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Application of chemical engineering principles',
      'Process safety and risk assessment',
      'Economic viability and optimization',
      'Environmental and sustainability considerations',
      'Technical rigor and documentation'
    ]
  },
  {
    id: 'bio-engineering',
    name: 'Bio-Engineering',
    icon: 'pulse',
    tag: 'BME',
    teaser: 'Medical devices and biomedical innovation',
    description: 'Bio-Engineering challenges teams to develop solutions at the intersection of engineering and medicine. Projects may involve medical device design, biomaterials, tissue engineering, or healthcare technology while considering biocompatibility, safety, and regulatory requirements.',
    eligibility: 'Open to Biomedical Engineering students and related programs',
    teamSize: '2 students per team',
    judgingCriteria: [
      'Medical and clinical relevance',
      'Biocompatibility and safety considerations',
      'Innovation in biomedical technology',
      'Regulatory and ethical awareness',
      'Potential for clinical impact'
    ]
  },
  {
    id: 'debate',
    name: 'Debate',
    icon: 'chat',
    tag: 'All Years',
    teaser: 'Engineering policy, ethics, and argumentation',
    description: 'The Debate competition tests students\' ability to analyze engineering ethics, policy, and societal issues. Competitors must research topics, build persuasive arguments, and think critically about the broader implications of engineering decisions.',
    eligibility: 'Open to all engineering students',
    teamSize: '2 students per team',
    judgingCriteria: [
      'Strength and logic of arguments',
      'Research depth and evidence quality',
      'Rebuttal and critical thinking skills',
      'Presentation and speaking ability',
      'Understanding of engineering ethics and policy'
    ]
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: 'chart',
    tag: 'All Years',
    teaser: 'Business analysis and engineering consulting',
    description: 'Consulting simulates real-world engineering consulting scenarios. Teams analyze business problems, develop strategic recommendations, and present professional consulting deliverables. This competition emphasizes business acumen, communication, and practical problem-solving.',
    eligibility: 'Open to all engineering students',
    teamSize: '4 students per team',
    judgingCriteria: [
      'Quality of business analysis',
      'Feasibility of recommendations',
      'Professional presentation quality',
      'Understanding of client needs',
      'Strategic thinking and justification'
    ]
  },
  {
    id: 'mini-design',
    name: 'Mini Design',
    icon: 'cap',
    tag: 'Grade 11–12',
    teaser: 'High school engineering design challenge',
    description: 'Mini Design introduces high school students to engineering design competitions. This category provides a supportive environment for younger students to experience hands-on engineering challenges and develop foundational problem-solving skills.',
    eligibility: 'Open to students currently in Grade 11 or Grade 12',
    teamSize: '3-4 students per team',
    judgingCriteria: [
      'Creativity and enthusiasm',
      'Basic engineering principles application',
      'Teamwork and collaboration',
      'Presentation clarity',
      'Prototype functionality'
    ]
  }
];
