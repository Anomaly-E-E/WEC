export interface Sponsor {
  name: string;
  tier: 'Diamond' | 'Platinum' | 'Silver' | 'Supporter';
  logo: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Bos Innovations',
    tier: 'Diamond',
    logo: '/sponsors/bos-innovations.png'
  },
  {
    name: 'Cornerstone Architecture',
    tier: 'Platinum',
    logo: '/sponsors/cornerstone.png'
  },
  {
    name: 'Rocket Lite',
    tier: 'Silver',
    logo: '/sponsors/rocket-lite.png'
  },
  {
    name: 'MTE',
    tier: 'Supporter',
    logo: '/sponsors/mte.png'
  },
  {
    name: 'TBK',
    tier: 'Supporter',
    logo: '/sponsors/tbk.png'
  }
];
