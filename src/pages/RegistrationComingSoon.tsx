import DinosaurDoodle from '../components/DinosaurDoodle';
import Icon from '../components/Icon';

interface FloatingDino {
  variant: 'long-neck' | 'stego' | 'round';
  color: string;
  size: string;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

const pageDinos: FloatingDino[] = [
  { variant: 'round', color: 'text-fern', size: 'w-10 h-10', top: '8%', left: '10%', duration: 3.4, delay: 0.2 },
  { variant: 'stego', color: 'text-leaf', size: 'w-12 h-12', top: '14%', left: '82%', duration: 4.1, delay: 1.1 },
  { variant: 'long-neck', color: 'text-sunlight', size: 'w-14 h-14', top: '30%', left: '6%', duration: 3.8, delay: 0.6 },
  { variant: 'round', color: 'text-moss', size: 'w-8 h-8', top: '38%', left: '90%', duration: 3.2, delay: 1.6 },
  { variant: 'stego', color: 'text-sunlight', size: 'w-16 h-16', top: '58%', left: '4%', duration: 4.4, delay: 0.3 },
  { variant: 'long-neck', color: 'text-fern', size: 'w-9 h-9', top: '68%', left: '92%', duration: 3.6, delay: 1.9 },
  { variant: 'round', color: 'text-leaf', size: 'w-11 h-11', top: '82%', left: '18%', duration: 3.9, delay: 0.9 },
  { variant: 'stego', color: 'text-moss', size: 'w-10 h-10', top: '88%', left: '75%', duration: 3.3, delay: 1.3 },
  { variant: 'long-neck', color: 'text-sunlight', size: 'w-8 h-8', top: '48%', left: '50%', duration: 4.2, delay: 0.5 },
  { variant: 'round', color: 'text-fern', size: 'w-9 h-9', top: '5%', left: '48%', duration: 3.5, delay: 1.4 },
  { variant: 'stego', color: 'text-leaf', size: 'w-8 h-8', top: '92%', left: '46%', duration: 3.7, delay: 0.8 },
  { variant: 'round', color: 'text-sunlight', size: 'w-10 h-10', top: '20%', left: '35%', duration: 3.6, delay: 0.4 },
  { variant: 'stego', color: 'text-fern', size: 'w-9 h-9', top: '4%', left: '70%', duration: 4.0, delay: 1.0 },
  { variant: 'long-neck', color: 'text-moss', size: 'w-12 h-12', top: '12%', left: '55%', duration: 3.3, delay: 1.7 },
  { variant: 'round', color: 'text-leaf', size: 'w-8 h-8', top: '45%', left: '22%', duration: 3.9, delay: 0.2 },
  { variant: 'stego', color: 'text-sunlight', size: 'w-11 h-11', top: '65%', left: '35%', duration: 3.5, delay: 1.2 },
  { variant: 'long-neck', color: 'text-fern', size: 'w-10 h-10', top: '75%', left: '60%', duration: 4.3, delay: 0.6 },
  { variant: 'round', color: 'text-moss', size: 'w-9 h-9', top: '25%', left: '92%', duration: 3.7, delay: 1.5 },
  { variant: 'stego', color: 'text-leaf', size: 'w-8 h-8', top: '55%', left: '65%', duration: 3.4, delay: 0.9 },
  { variant: 'long-neck', color: 'text-sunlight', size: 'w-9 h-9', top: '85%', left: '30%', duration: 4.1, delay: 1.8 },
];

const cardDinos: FloatingDino[] = [
  { variant: 'round', color: 'text-sunlight', size: 'w-8 h-8', top: '', left: '', duration: 3.4, delay: 0.4 },
  { variant: 'stego', color: 'text-fern', size: 'w-7 h-7', top: '', left: '', duration: 3.9, delay: 1.2 },
  { variant: 'long-neck', color: 'text-leaf', size: 'w-6 h-6', top: '', left: '', duration: 3.6, delay: 0.7 },
];

export default function RegistrationComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-24 bg-forest-black">
      {pageDinos.map((dino, index) => (
        <div
          key={index}
          className={`absolute dino-float ${dino.color}`}
          style={{ top: dino.top, left: dino.left, animationDuration: `${dino.duration}s`, animationDelay: `${dino.delay}s` }}
        >
          <DinosaurDoodle variant={dino.variant} className={dino.size} />
        </div>
      ))}

      <div className="relative z-10 border-forest bg-forest-mid/30 rounded-2xl p-12 md:p-16 max-w-xl text-center">
        <div
          className={`absolute -top-4 -right-4 dino-float ${cardDinos[0].color}`}
          style={{ animationDuration: `${cardDinos[0].duration}s`, animationDelay: `${cardDinos[0].delay}s` }}
        >
          <DinosaurDoodle variant={cardDinos[0].variant} className={cardDinos[0].size} />
        </div>
        <div
          className={`absolute -bottom-3 -left-3 dino-float ${cardDinos[1].color}`}
          style={{ animationDuration: `${cardDinos[1].duration}s`, animationDelay: `${cardDinos[1].delay}s` }}
        >
          <DinosaurDoodle variant={cardDinos[1].variant} className={cardDinos[1].size} />
        </div>
        <div
          className={`absolute -bottom-3 -right-3 dino-float ${cardDinos[2].color}`}
          style={{ animationDuration: `${cardDinos[2].duration}s`, animationDelay: `${cardDinos[2].delay}s` }}
        >
          <DinosaurDoodle variant={cardDinos[2].variant} className={cardDinos[2].size} />
        </div>

        <h1 className="font-mono text-cream text-2xl md:text-3xl font-bold tracking-wider uppercase">
          Registration Opening Soon :)
        </h1>

        <a
          href="https://www.instagram.com/ues_wec/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-cream-dim hover:text-sunlight transition-colors text-sm font-sans"
        >
          <Icon name="instagram" className="w-4 h-4" />
          Follow us on Instagram for updates
        </a>
      </div>
    </section>
  );
}
