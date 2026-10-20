export interface BonusMarkEntry {
  code: string;
  note: string;
}

export interface BonusMarkGroup {
  discipline: string;
  entries: BonusMarkEntry[];
}

export const bonusMarkGroups: BonusMarkGroup[] = [
  {
    discipline: 'First Year',
    entries: [
      { code: 'ES1050', note: 'Junior Design or Debate' },
    ],
  },
  {
    discipline: 'Integrated Engineering',
    entries: [
      { code: 'IE2298', note: 'Any competition' },
      { code: 'IE4499', note: 'Any competition except Junior Design' },
      { code: 'IE4100G', note: 'Any competition' },
    ],
  },
  {
    discipline: 'Electrical Engineering',
    entries: [
      { code: 'ELI4100', note: 'Any competition except Junior Design' },
      { code: 'ECE3399', note: 'Senior Design' },
    ],
  },
  {
    discipline: 'Mechanical Engineering',
    entries: [
      { code: 'MME2259', note: 'Junior or Senior Design' },
      { code: 'MME3380', note: 'Junior or Senior Design' },
      { code: 'MME4499', note: 'Senior Design' },
    ],
  },
  {
    discipline: 'Mechatronics Engineering',
    entries: [
      { code: 'MSE2202', note: 'Junior or Senior Design' },
    ],
  },
  {
    discipline: 'Software & AI Engineering',
    entries: [
      { code: 'SE4450', note: 'Programming' },
      { code: 'AISE3350', note: 'Programming' },
    ],
  },
  {
    discipline: 'Chemical Engineering',
    entries: [
      { code: 'CEB2221', note: 'Chemical Design' },
      { code: 'CEB3307', note: 'Chemical Design' },
    ],
  },
  {
    discipline: 'Civil Engineering',
    entries: [
      { code: 'CCE2202', note: 'Civil Design' },
      { code: 'CCE3369', note: 'Civil Design' },
      { code: 'CCE4441', note: 'Civil Design' },
    ],
  },
];
