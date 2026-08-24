interface WaveDividerProps {
  fill: string;
  className?: string;
}

export default function WaveDivider({ fill, className = 'absolute bottom-0 left-0 right-0 w-full h-12 md:h-16 z-[5]' }: WaveDividerProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 80 Q300 0 600 24 T1200 8 L1200 80 Z" fill={fill} />
    </svg>
  );
}
