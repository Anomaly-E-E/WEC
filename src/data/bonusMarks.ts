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
      { code: 'IE2298', note: 'Any Competition' },
      { code: 'IE4499', note: 'Any Competition (Besides Junior)' },
    ],
  },
  {
    discipline: 'Electrical Engineering',
    entries: [
      { code: 'ELI4100', note: 'Any Competition (Besides Junior)' },
      { code: 'ECE3399', note: 'Senior Design (Besides Junior)' },
    ],
  },
  {
    discipline: 'Mechanical Engineering',
    entries: [
      { code: 'MME2259', note: 'Junior or Senior Design' },
      { code: 'MME3380', note: 'Any Competition (Besides Junior)' },
      { code: 'MME4499', note: 'Any Competition (Besides Junior)' },
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
    discipline: 'Biomedical Engineering',
    entries: [
      { code: 'BME3201', note: 'Bio-Engineering' },
      { code: 'BME3301', note: 'Bio-Engineering' },
      { code: 'BME3303', note: 'Bio-Engineering' },
    ],
  },
  {
    discipline: 'Chemical Engineering',
    entries: [
      { code: 'CBE2220', note: 'Chemical' },
      { code: 'CBE3307', note: 'Chemical' },
    ],
  },
  {
    discipline: 'Civil Engineering',
    entries: [
      { code: 'CCE2202', note: 'Civil' },
      { code: 'CCE3369', note: 'Civil' },
      { code: 'CCE4441', note: 'Civil' },
    ],
  },
];
