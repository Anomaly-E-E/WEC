import type { ReactNode } from 'react';

interface ForestCritterProps {
  variant?: 'deer' | 'owl' | 'squirrel';
  className?: string;
}

export default function ForestCritter({ variant = 'owl', className = 'w-12 h-12' }: ForestCritterProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {critters[variant]}
    </svg>
  );
}

const HIGHLIGHT = '#f7f1de';

const critters: Record<NonNullable<ForestCritterProps['variant']>, ReactNode> = {
  deer: (
    <>
      <path d="M38 32 L32 8 M38 32 L18 16" stroke="rgb(var(--gold))" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M62 32 L68 8 M62 32 L82 16" stroke="rgb(var(--gold))" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="26" cy="38" rx="8" ry="17" transform="rotate(-15 26 38)" fill="rgb(var(--fern))" />
      <ellipse cx="74" cy="38" rx="8" ry="17" transform="rotate(15 74 38)" fill="rgb(var(--fern))" />
      <ellipse cx="27" cy="40" rx="4" ry="11" transform="rotate(-15 27 40)" fill="rgb(var(--leaf))" />
      <ellipse cx="73" cy="40" rx="4" ry="11" transform="rotate(15 73 40)" fill="rgb(var(--leaf))" />
      <circle cx="50" cy="58" r="26" fill="rgb(var(--fern))" />
      <ellipse cx="50" cy="70" rx="13" ry="10" fill="rgb(var(--leaf))" />
      <circle cx="40" cy="52" r="4.5" fill="rgb(var(--moss-dark))" />
      <circle cx="60" cy="52" r="4.5" fill="rgb(var(--moss-dark))" />
      <circle cx="41.5" cy="50.5" r="1.3" fill={HIGHLIGHT} />
      <circle cx="61.5" cy="50.5" r="1.3" fill={HIGHLIGHT} />
      <ellipse cx="50" cy="68" rx="3.5" ry="2.8" fill="rgb(var(--moss-dark))" />
    </>
  ),
  owl: (
    <>
      <ellipse cx="50" cy="60" rx="27" ry="32" fill="rgb(var(--fern))" />
      <ellipse cx="24" cy="64" rx="9" ry="18" transform="rotate(-10 24 64)" fill="rgb(var(--moss))" />
      <ellipse cx="76" cy="64" rx="9" ry="18" transform="rotate(10 76 64)" fill="rgb(var(--moss))" />
      <ellipse cx="50" cy="50" rx="20" ry="18" fill="rgb(var(--leaf))" />
      <path d="M28 30 L34 10 L40 32 Z" fill="rgb(var(--fern))" />
      <path d="M72 30 L66 10 L60 32 Z" fill="rgb(var(--fern))" />
      <circle cx="42" cy="50" r="5.5" fill="rgb(var(--moss-dark))" />
      <circle cx="58" cy="50" r="5.5" fill="rgb(var(--moss-dark))" />
      <circle cx="43.5" cy="48" r="1.5" fill={HIGHLIGHT} />
      <circle cx="59.5" cy="48" r="1.5" fill={HIGHLIGHT} />
      <path d="M46 57 L54 57 L50 65 Z" fill="rgb(var(--gold))" />
    </>
  ),
  squirrel: (
    <>
      <path d="M56 74 Q84 66 78 36 Q73 14 47 16" fill="none" stroke="rgb(var(--fern))" strokeWidth="18" strokeLinecap="round" />
      <path d="M56 74 Q84 66 78 36 Q73 14 47 16" fill="none" stroke="rgb(var(--leaf))" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="40" cy="66" rx="19" ry="21" fill="rgb(var(--fern))" />
      <ellipse cx="40" cy="71" rx="11" ry="13" fill="rgb(var(--leaf))" />
      <circle cx="37" cy="37" r="16" fill="rgb(var(--fern))" />
      <circle cx="26" cy="25" r="6" fill="rgb(var(--fern))" />
      <circle cx="47" cy="24" r="6" fill="rgb(var(--fern))" />
      <circle cx="26" cy="25" r="3" fill="rgb(var(--leaf))" />
      <circle cx="47" cy="24" r="3" fill="rgb(var(--leaf))" />
      <circle cx="31" cy="36" r="3.4" fill="rgb(var(--moss-dark))" />
      <circle cx="43" cy="35" r="3.4" fill="rgb(var(--moss-dark))" />
      <circle cx="32.2" cy="34.7" r="1" fill={HIGHLIGHT} />
      <circle cx="44.2" cy="33.7" r="1" fill={HIGHLIGHT} />
      <ellipse cx="37" cy="44" rx="2.6" ry="2" fill="rgb(var(--moss-dark))" />
      <ellipse cx="35" cy="80" rx="7" ry="3.8" fill="rgb(var(--moss))" />
      <ellipse cx="35" cy="86" rx="6.3" ry="7.3" fill="rgb(var(--gold))" />
    </>
  ),
};
