import type { ReactNode } from 'react';

export type IconName =
  | 'sprout'
  | 'compass'
  | 'code'
  | 'bulb'
  | 'column'
  | 'flask'
  | 'pulse'
  | 'chat'
  | 'chart'
  | 'cap'
  | 'instagram'
  | 'facebook'
  | 'linkedin'
  | 'menu'
  | 'close'
  | 'chevronDown'
  | 'sun'
  | 'moon';

interface IconProps {
  name: IconName;
  className?: string;
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, ReactNode> = {
  sprout: (
    <>
      <path d="M12 21V11" />
      <path d="M12 11c0-3.5-2.5-5-5.5-5 0 3.5 2.5 5 5.5 5z" />
      <path d="M12 8c0-3 2-4.5 4.5-4.5 0 3-2 4.5-4.5 4.5z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="4.5" r="1.3" />
      <path d="M8 20l4-13.5 4 13.5" />
      <path d="M9.6 15.5h4.8" />
    </>
  ),
  code: (
    <>
      <path d="M9 8l-5 4 5 4" />
      <path d="M15 8l5 4-5 4" />
    </>
  ),
  bulb: (
    <>
      <circle cx="12" cy="10" r="5.5" />
      <path d="M9.8 18.5h4.4" />
      <path d="M10.3 21h3.4" />
    </>
  ),
  column: (
    <>
      <path d="M3 8.5L12 4l9 4.5" />
      <path d="M5 8.5V20M9 8.5V20M15 8.5V20M19 8.5V20" />
      <path d="M3.5 20h17" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10.3 3v6L4.9 18a1.8 1.8 0 001.5 2.7h11.2a1.8 1.8 0 001.5-2.7L13.7 9V3" />
      <path d="M7.6 15h8.8" />
    </>
  ),
  pulse: (
    <path d="M3 12h4l1.8-5 3.2 10 2.2-8 1.6 3h5.2" />
  ),
  chat: (
    <>
      <rect x="3.2" y="5" width="17.6" height="11.5" rx="2.2" />
      <path d="M8.5 16.5l-2.3 3.2v-3.2" />
      <path d="M7 8.8h10M7 12h6.5" />
    </>
  ),
  chart: <path d="M4.5 20V11M11 20V4M17.5 20v-7.5M4 20.3h16.5" />,
  cap: (
    <>
      <path d="M12 4L2.5 9l9.5 5 9.5-5-9.5-5z" />
      <path d="M6.2 11.5V16c0 1.6 2.8 3 5.8 3s5.8-1.4 5.8-3v-4.5" />
      <path d="M21.5 9v6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.85.3-1.4 1.7-1.4h1.2V5.1c-.3 0-1.3-.1-2.4-.1-2.4 0-3.9 1.4-3.9 4.1v2.1h-2.4v2.9h2.4V21" />
  ),
  linkedin: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4" />
      <circle cx="8" cy="8.7" r="1" fill="currentColor" stroke="none" />
      <path d="M8 11.5V17" />
      <path d="M12 17v-3.5a2 2 0 0 1 4 0V17" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.85 1.85M17.55 17.55l1.85 1.85M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.85-1.85M17.55 6.45l1.85-1.85" />
    </>
  ),
  moon: <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a7 7 0 0 0 9.5 9.5z" />,
};
