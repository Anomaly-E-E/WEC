import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

interface ForestHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  size?: 'normal' | 'large';
}

export default function ForestHero({ title, subtitle, children, size = 'normal' }: ForestHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-24 pb-14 md:pt-28 md:pb-20"
      style={{ background: 'rgb(var(--banner-solid))' }}
    >
      <svg
        className="absolute top-0 right-0 w-2/3 h-full z-[2]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58 0 H100 V65 C82 55, 65 30, 58 0 Z"
          fill="rgb(var(--banner-sage))"
        />
      </svg>

      <img
        src="/wec-robot-green.png"
        alt=""
        className="hidden md:block absolute top-32 md:top-40 right-8 md:right-16 h-16 md:h-20 w-auto z-[6] opacity-90 critter-bob"
        style={{ filter: 'brightness(0) invert(1)', animationDuration: '6s' }}
      />

      <WaveDivider fill="rgb(var(--forest-black))" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-2 text-stencil-badge"
        >
          WEC 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-display font-black text-white ${
            size === 'large' ? 'text-5xl sm:text-6xl md:text-8xl' : 'text-4xl sm:text-5xl md:text-7xl'
          } mb-3 md:mb-4 leading-[1.1] md:leading-none`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-bold text-white/90 text-xs sm:text-sm md:text-base tracking-[0.08em] sm:tracking-[0.15em] uppercase px-2"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
