import React from 'react';

interface LeafProps {
  className?: string;
  fill?: string;
}

export const MapleLeaf: React.FC<LeafProps> = ({ className, fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 5 L55 35 L75 25 L60 50 L85 55 L60 65 L70 90 L50 75 L30 90 L40 65 L15 55 L40 50 L25 25 L45 35 Z"
      fill={fill}
    />
  </svg>
);

export const OakLeaf: React.FC<LeafProps> = ({ className, fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 10 Q55 20 60 25 Q65 28 68 35 Q70 40 72 48 Q72 55 70 62 Q67 70 62 78 Q58 85 50 95 Q42 85 38 78 Q33 70 30 62 Q28 55 28 48 Q28 40 32 35 Q35 28 40 25 Q45 20 50 10 M40 30 Q35 35 38 40 M60 30 Q65 35 62 40 M35 50 Q30 52 33 58 M65 50 Q70 52 67 58"
      fill={fill}
    />
  </svg>
);

export const SimpleLeaf: React.FC<LeafProps> = ({ className, fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 5 Q70 30 72 50 Q70 70 50 95 Q30 70 28 50 Q30 30 50 5"
      fill={fill}
    />
    <path
      d="M50 5 L50 95"
      stroke={fill}
      strokeWidth="1"
      opacity="0.3"
    />
  </svg>
);

export const LilyPadLeaf: React.FC<LeafProps> = ({ className, fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="40" ry="35" fill={fill} />
    <path
      d="M50 20 L50 90 M50 55 L10 55 M50 55 L90 55"
      stroke={fill}
      strokeWidth="1.5"
      opacity="0.25"
    />
  </svg>
);

export const WillowLeaf: React.FC<LeafProps> = ({ className, fill = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 5 Q58 25 60 50 Q58 75 50 95 Q42 75 40 50 Q42 25 50 5"
      fill={fill}
    />
    <path
      d="M50 5 Q50 50 50 95"
      stroke={fill}
      strokeWidth="0.8"
      opacity="0.3"
    />
  </svg>
);
