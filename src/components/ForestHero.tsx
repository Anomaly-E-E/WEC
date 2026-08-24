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
    <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(160deg, var(--banner-1) 0%, var(--banner-2) 50%, var(--banner-3) 100%)
          `,
        }}
      ></div>

      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-12 md:h-16 z-[5]"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 80 Q300 0 600 24 T1200 8 L1200 80 Z" fill="rgb(var(--forest-black))" />
      </svg>

      <div
        className="absolute inset-0 opacity-55"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 65% 40%, var(--banner-glow-1), transparent)
          `,
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 40% 50% at 15% 85%, var(--banner-glow-2), transparent)
          `,
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-display font-black text-cream ${
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
            className="font-mono text-fern text-sm md:text-base tracking-widest uppercase"
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
