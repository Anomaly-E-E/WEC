import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ForestHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  size?: 'normal' | 'large';
}

export default function ForestHero({ title, subtitle, children, size = 'normal' }: ForestHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-28 pb-20"
      style={{ background: 'rgb(var(--banner-solid))' }}
    >
      <svg
        className="absolute top-0 right-0 w-2/3 h-full z-[2]"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 0 H800 V260 C700 200, 580 140, 520 60 C480 25, 460 0, 500 0 Z"
          fill="rgb(var(--banner-sage))"
        />
      </svg>

      <img
        src="/wec-robot-green.png"
        alt=""
        className="hidden md:block absolute top-6 right-8 md:right-16 h-16 md:h-20 w-auto z-[6] opacity-90"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-12 md:h-16 z-[5]"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 80 Q300 0 600 24 T1200 8 L1200 80 Z" fill="rgb(var(--forest-black))" />
      </svg>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-2xl md:text-3xl uppercase tracking-[0.15em] mb-2 text-stencil-badge"
        >
          WEC 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-display font-black text-white ${
            size === 'large' ? 'text-6xl md:text-8xl' : 'text-5xl md:text-7xl'
          } mb-4`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-bold text-white/90 text-sm md:text-base tracking-[0.15em] uppercase"
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
