import type { ReactNode } from 'react';

interface DinosaurDoodleProps {
  variant?: 'long-neck' | 'stego' | 'round';
  className?: string;
}

export default function DinosaurDoodle({ variant = 'round', className = 'w-10 h-10' }: DinosaurDoodleProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {shapes[variant]}
    </svg>
  );
}

const shapes: Record<NonNullable<DinosaurDoodleProps['variant']>, ReactNode> = {
  'long-neck': (
    <path d="M30 78c-8 0-14-6-14-13 0-6 4-11 10-13-2-3-3-6-3-10 0-11 9-20 20-20 4 0 7 1 10 3 3-6 9-9 15-9 3 0 5 2 5 5s-2 5-5 5c-3 0-5 2-6 5 4 3 6 8 6 13 0 3-1 6-2 8 5 2 8 6 8 11 0 6-6 11-13 11-3 0-6-1-8-3-3 2-6 3-10 3H30zm-3-24c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z" />
  ),
  stego: (
    <path d="M20 68c0-13 10-24 23-27 0-3 2-6 5-6s5 3 5 6c1 0 2 0 3 1 1-3 4-5 6-5 3 0 5 2 5 5 0 1 0 2-1 3 8 4 13 12 13 21 0 2 0 4-1 6 3 1 5 4 5 7 0 4-4 7-8 7-2 0-4-1-5-2-3 3-7 5-12 5H35c-8 0-15-7-15-15v-5zm4-6c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z" />
  ),
  round: (
    <path d="M50 20c9 0 16 6 18 14 6 2 10 8 10 14 0 6-4 11-9 13 1 2 2 4 2 7 0 7-6 12-13 12-4 0-8-2-10-5-3 2-6 3-10 3-9 0-16-7-16-16 0-5 2-9 6-12-2-3-3-6-3-10 0-11 9-20 20-20 2 0 4 0 5 1zm-20 34c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z" />
  ),
};
