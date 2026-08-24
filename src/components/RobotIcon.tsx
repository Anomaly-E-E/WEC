interface RobotIconProps {
  className?: string;
}

export default function RobotIcon({ className = 'w-12 h-12' }: RobotIconProps) {
  return (
    <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="50" cy="8" r="5" stroke="rgb(var(--fern))" strokeWidth="3" />
      <line x1="50" y1="13" x2="50" y2="22" stroke="rgb(var(--fern))" strokeWidth="3" strokeLinecap="round" />
      <rect x="30" y="22" width="40" height="30" rx="4" stroke="rgb(var(--fern))" strokeWidth="3" />
      <circle cx="40" cy="37" r="5" stroke="rgb(var(--fern))" strokeWidth="3" />
      <circle cx="60" cy="37" r="5" stroke="rgb(var(--fern))" strokeWidth="3" />
      <rect x="25" y="58" width="50" height="35" rx="3" stroke="rgb(var(--fern))" strokeWidth="3" />
      <path d="M25 66 H12 V79 H21" stroke="rgb(var(--fern))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 66 H88 V79 H79" stroke="rgb(var(--fern))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="38" y1="93" x2="38" y2="105" stroke="rgb(var(--fern))" strokeWidth="3" strokeLinecap="round" />
      <line x1="62" y1="93" x2="62" y2="105" stroke="rgb(var(--fern))" strokeWidth="3" strokeLinecap="round" />
      <circle cx="38" cy="111" r="6" stroke="rgb(var(--fern))" strokeWidth="3" />
      <circle cx="62" cy="111" r="6" stroke="rgb(var(--fern))" strokeWidth="3" />
    </svg>
  );
}
