export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  initials: string;
  yearDiscipline?: string;
  photo?: string;
  photoPosition?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Yasi Movahedi',
    role: 'Co-Chair',
    initials: 'YM',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/yasi-movahedi.jpg'
  },
  {
    name: 'Natalie McGillicuddy',
    role: 'Co-Chair',
    initials: 'NM',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/natalie-mcgillicuddy.jpg'
  },
  {
    name: 'Shrey Mahida',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'SM',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/shrey-mahida.jpg'
  },
  {
    name: 'Violet Angellotti',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'VA',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/violet-angellotti.jpg',
    photoPosition: 'center 40%'
  },
  {
    name: 'Estela Katchen',
    role: 'VP Competitions',
    department: 'Competitions',
    initials: 'EK',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/estela-katchen.jpg',
    photoPosition: 'center 25%'
  },
  {
    name: 'Turner Reucassel',
    role: 'VP Technical',
    department: 'Technical',
    initials: 'TR',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/turner-reucassel.jpg'
  },
  {
    name: 'Arshan Shareef',
    role: 'VP Technical',
    department: 'Technical',
    initials: 'AS',
    yearDiscipline: '3rd Year · Software',
    photo: '/team/arshan-shareef.jpg',
    linkedin: 'https://www.linkedin.com/in/arshan-shareef-mohammed-4ab94b330/?skipRedirect=true'
  },
  {
    name: 'Kevin McGillicuddy',
    role: 'VP Finance',
    department: 'Finance',
    initials: 'KM',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/kevin-mcgillicuddy.jpg'
  },
  {
    name: 'Bridget Shin',
    role: 'VP Publications',
    department: 'Publications',
    initials: 'BS',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/bridget-shin.jpg'
  },
  {
    name: 'Michael Amos',
    role: 'VP Sponsorship',
    department: 'Sponsorship',
    initials: 'MA',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/michael-amos.jpg'
  },
  {
    name: 'King Zhang',
    role: 'VP Sponsorship',
    department: 'Sponsorship',
    initials: 'KZ',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/king-zhang.jpg'
  },
  {
    name: 'Olga Duvnjak',
    role: 'VP Logistics',
    department: 'Logistics',
    initials: 'OD',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/olga-duvnjak.jpg'
  },
  {
    name: 'Kaitlyn Ivanoff',
    role: 'VP Logistics',
    department: 'Logistics',
    initials: 'KI',
    yearDiscipline: 'Year · Discipline',
    photo: '/team/kaitlyn-ivanoff.jpg',
    photoPosition: 'center 28%'
  }
];
