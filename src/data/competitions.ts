import type { IconName } from '../components/Icon';

export interface Competition {
  id: string;
  name: string;
  icon: IconName;
  tag: string;
  teaser: string;
  description: string;
  eligibility: string;
  judgingCriteria: string[];
}

export const competitions: Competition[] = [
  {
    id: 'junior-design',
    name: 'Junior Design',
    icon: 'sprout',
    tag: 'Year 1–2',
    teaser: 'Design challenge for first and second-year engineering students',
    description: 'Built for first and second-year students. Your team gets a design problem and a limited set of materials and tools, and has to build a working prototype before time runs out.',
    eligibility: 'Open to students in Year 1 or Year 2 of any engineering program',
    judgingCriteria: [
      'Creativity of the design',
      'How well the prototype works',
      'Use of materials and resources',
      'Presentation and documentation',
      'Teamwork and time management'
    ]
  },
  {
    id: 'senior-design',
    name: 'Senior Design',
    icon: 'compass',
    tag: 'All years',
    teaser: 'Advanced engineering design challenge for all students',
    description: 'A tougher, more open-ended design problem based on a real-world situation. Teams design a solution, back it up technically and pitch it to the judges the way they would to a client.',
    eligibility: 'Open to all engineering students',
    judgingCriteria: [
      'Technical depth and feasibility',
      'Originality',
      'Quality of documentation',
      'Clarity of the presentation',
      'Real-world impact'
    ]
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'code',
    tag: 'All years',
    teaser: 'Algorithmic problem-solving and software development',
    description: 'Teams get a set of programming problems and a time limit. Solve as many as you can with code that is correct, runs efficiently and holds up on the edge cases.',
    eligibility: 'Open to all engineering students',
    judgingCriteria: [
      'Correctness and efficiency',
      'Code quality and documentation',
      'Problem-solving approach',
      'Handling of edge cases',
      'Time and space complexity'
    ]
  },
  {
    id: 're-engineering',
    name: 'Re-Engineering',
    icon: 'refresh',
    tag: 'All years',
    teaser: 'Redesign an existing product for a new purpose',
    description: 'Take an existing product or technology and redesign it for a new use or environment. Teams build a prototype, write a report and present to the judges, showing how their changes work and why they make sense in the real world.',
    eligibility: 'Open to all engineering students',
    judgingCriteria: [
      'Functionality of the changes',
      'Environmental, social and economic feasibility',
      'Technical feasibility',
      'Real-world use',
      'Report and presentation quality'
    ]
  },
  {
    id: 'civil-design',
    name: 'Civil Design',
    icon: 'column',
    tag: 'Civil Eng',
    teaser: 'Infrastructure and structural engineering challenges',
    description: 'A design challenge focused on structures and infrastructure. Teams use what they know about loads, materials and site conditions to design, and sometimes build, a scale model.',
    eligibility: 'Open to Civil Engineering students',
    judgingCriteria: [
      'Structural integrity and safety',
      'Use of civil engineering principles',
      'Sustainability and environmental impact',
      'Cost and practicality',
      'Technical documentation'
    ]
  },
  {
    id: 'chemical-design',
    name: 'Chemical Design',
    icon: 'flask',
    tag: 'Chem Eng',
    teaser: 'Process design and chemical engineering solutions',
    description: 'Teams work through a process design problem involving reactions, separations or process control, and come up with a solution that is safe, efficient and economical.',
    eligibility: 'Open to Chemical Engineering students',
    judgingCriteria: [
      'Use of chemical engineering principles',
      'Process safety and risk assessment',
      'Economic viability',
      'Environmental impact',
      'Technical detail and documentation'
    ]
  },
  {
    id: 'bio-engineering',
    name: 'Bio-Engineering',
    icon: 'pulse',
    tag: 'BME',
    teaser: 'Medical devices and biomedical innovation',
    description: 'Design problems where engineering meets medicine, like medical devices, biomaterials or healthcare technology. Teams need to think about safety, biocompatibility and regulations, not just whether the design works.',
    eligibility: 'Open to Biomedical Engineering students and related programs',
    judgingCriteria: [
      'Medical and clinical relevance',
      'Safety and biocompatibility',
      'Originality of the solution',
      'Regulatory and ethical awareness',
      'Potential clinical impact'
    ]
  },
  {
    id: 'debate',
    name: 'Debate',
    icon: 'chat',
    tag: 'All years',
    teaser: 'Engineering policy, ethics, and argumentation',
    description: 'Teams are given a topic on engineering ethics, policy or the impact of technology on society, then argue their side against another team. Good research, clear arguments and quick rebuttals win.',
    eligibility: 'Open to all engineering students',
    judgingCriteria: [
      'Strength of arguments',
      'Research and evidence',
      'Rebuttals',
      'Speaking and delivery',
      'Understanding of engineering ethics and policy'
    ]
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: 'chart',
    tag: 'All years',
    teaser: 'Business analysis and engineering consulting',
    description: 'Teams act as consultants for a client with a real business problem. Figure out what is going on, come up with a plan and present your recommendations to the judges as if they were the client.',
    eligibility: 'Open to all engineering students',
    judgingCriteria: [
      'Quality of the analysis',
      'Feasibility of the recommendations',
      'Presentation',
      'Understanding of the client',
      'Reasoning behind the plan'
    ]
  },
  {
    id: 'mini-design',
    name: 'Mini Design',
    icon: 'cap',
    tag: 'Grade 11–12',
    teaser: 'High school engineering design challenge',
    description: 'A design challenge for high school students. It is a relaxed way to try hands-on engineering, work as a team and see what an engineering competition is like.',
    eligibility: 'Open to students currently in Grade 11 or Grade 12',
    judgingCriteria: [
      'Creativity',
      'Use of basic engineering principles',
      'Teamwork',
      'Presentation',
      'How well the prototype works'
    ]
  }
];
