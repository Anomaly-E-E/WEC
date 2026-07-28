export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Yasi Movahedi',
    role: 'Co-Chair',
    initials: 'YM'
  },
  {
    name: 'Natalie McGillicuddy',
    role: 'Co-Chair',
    initials: 'NM'
  },
  {
    name: 'Shrey Mahida',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'SM'
  },
  {
    name: 'Violet Angellotti',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'VA'
  },
  {
    name: 'Estela Katchen',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'EK'
  },
  {
    name: 'Turner Reucassel',
    role: 'VP Technical',
    department: 'Technical',
    initials: 'TR'
  },
  {
    name: 'Arshan Shareef',
    role: 'VP Technical',
    department: 'Technical',
    initials: 'AS'
  },
  {
    name: 'Olga Duvnjak',
    role: 'VP Logistics',
    department: 'Logistics',
    initials: 'OD'
  },
  {
    name: 'Kaitlyn Ivanoff',
    role: 'VP Logistics',
    department: 'Logistics',
    initials: 'KI'
  },
  {
    name: 'Michael Amos',
    role: 'VP Sponsorship',
    department: 'Sponsorship',
    initials: 'MA'
  },
  {
    name: 'King Zhang',
    role: 'VP Sponsorship',
    department: 'Sponsorship',
    initials: 'KZ'
  },
  {
    name: 'Kevin McGillicuddy',
    role: 'VP Finance',
    department: 'Finance',
    initials: 'KM'
  },
  {
    name: 'Bridget Shin',
    role: 'VP Publications',
    department: 'Publications',
    initials: 'BS'
  }
];
