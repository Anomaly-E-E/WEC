import type { ReactNode } from 'react';

interface ForestCritterDoodleProps {
  variant?: 'deer' | 'owl' | 'squirrel';
  className?: string;
}

export default function ForestCritterDoodle({ variant = 'deer', className = 'w-10 h-10' }: ForestCritterDoodleProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {shapes[variant]}
    </svg>
  );
}

const shapes: Record<NonNullable<ForestCritterDoodleProps['variant']>, ReactNode> = {
  deer: (
    <path d="M50 24c9 0 16 6 18 14 6 2 10 8 10 14 0 6-4 11-9 13 1 2 2 4 2 7 0 7-6 12-13 12-4 0-8-2-10-5-3 2-6 3-10 3-9 0-16-7-16-16 0-5 2-9 6-12-2-3-3-6-3-10 0-11 9-20 20-20 2 0 4 0 5 1zM43 22L36 6 42 12 44 20zM57 20L62 4 67 8 61 18z M46 32c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z" />
  ),
  owl: (
    <path d="M50 22c14 0 25 11 25 25 0 3-1 6-2 9 2 3 3 6 3 10 0 12-11 21-26 21s-26-9-26-21c0-4 1-7 3-10-1-3-2-6-2-9 0-14 11-25 25-25zm-16-6c-3-2-6-2-8 0-2 2-1 5 1 7zm32 0c3-2 6-2 8 0 2 2 1 5-1 7zm-24 26c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm16 0c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" />
  ),
  squirrel: (
    <path d="M40 82c-11 0-20-8-20-18 0-7 4-13 11-16-2-3-3-6-3-9 0-8 6-14 14-14 3 0 6 1 8 3 3-2 5-1 5 2 0 1-1 2-2 3 5 3 8 8 8 14 0 4-1 7-3 10 4 3 7 7 7 12 0 6-6 10-13 10-2 0-4 0-6-1-2 3-4 4-6 4zM58 46C64 40 74 36 82 40 88 43 90 50 86 55 82 60 74 60 68 56 72 58 78 57 80 52 82 48 78 44 72 45 66 46 61 49 58 52z M37 34c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z" />
  ),
};
