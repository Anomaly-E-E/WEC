import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapleLeaf, OakLeaf, SimpleLeaf, LilyPadLeaf, WillowLeaf } from './LeafSVGs';

const LEAF_SHAPES = [MapleLeaf, OakLeaf, SimpleLeaf, LilyPadLeaf, WillowLeaf];

interface LeafData {
  id: number;
  angle: number;
  distance: number;
  rotation: number;
  delay: number;
  duration: number;
  color: string;
  ShapeComponent: React.FC<{ className?: string; fill?: string }>;
  scale: number;
  burstOpacity: number;
}

const LEAF_COLORS = [
  '#1a2e1c', '#0f1e10', '#243020',
  '#3d6b42', '#4a7a4e', '#527a48',
  '#7ab870', '#8db865', '#a8c870',
  '#c8e87a', '#c8e87a', '#c8e87a',
  '#0a0f0a', '#0a0f0a', '#0a0f0a', '#0a0f0a', '#0a0f0a',
];

const generateLeafData = (count: number): LeafData[] => {
  const leaves: LeafData[] = [];
  const angleStep = 360 / count;

  for (let i = 0; i < count; i++) {
    const baseAngle = i * angleStep;
    const angleJitter = (Math.random() - 0.5) * 30;
    const angle = baseAngle + angleJitter;

    const distance = 45 + Math.random() * 30;
    const rotation = (Math.random() - 0.5) * 360;
    const delay = Math.random() * 350;
    const duration = 700 + Math.random() * 400;
    const color = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)];
    const ShapeComponent = LEAF_SHAPES[Math.floor(Math.random() * LEAF_SHAPES.length)];
    const scale = 0.6 + Math.random() * 0.8;
    const burstOpacity = 0.6 + Math.random() * 0.3;

    leaves.push({
      id: i,
      angle,
      distance,
      rotation,
      delay,
      duration,
      color,
      ShapeComponent,
      scale,
      burstOpacity,
    });
  }

  return leaves;
};

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<'burst' | 'return' | 'done'>('burst');

  const leaves = useMemo(() => generateLeafData(200), []);

  useEffect(() => {
    const burstTimer = setTimeout(() => {
      setPhase('return');
    }, 1500);

    const returnTimer = setTimeout(() => {
      setPhase('done');
    }, 2300);

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2700);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(returnTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'done' ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9999] bg-forest-black flex items-center justify-center overflow-hidden"
      >
        {leaves.map((leaf) => {
          const radians = (leaf.angle * Math.PI) / 180;
          const endX = Math.cos(radians) * leaf.distance;
          const endY = Math.sin(radians) * leaf.distance;

          return (
            <motion.div
              key={leaf.id}
              initial={{
                x: '0vw',
                y: '0vh',
                scale: 0,
                opacity: 0,
                rotate: 0,
              }}
              animate={
                phase === 'burst'
                  ? {
                      x: `${endX}vw`,
                      y: `${endY}vh`,
                      scale: leaf.scale,
                      opacity: leaf.burstOpacity,
                      rotate: leaf.rotation,
                    }
                  : phase === 'return'
                  ? {
                      x: '0vw',
                      y: '0vh',
                      scale: 0,
                      opacity: 0,
                      rotate: leaf.rotation + 180,
                    }
                  : {}
              }
              transition={{
                delay: phase === 'burst' ? leaf.delay / 1000 : 0,
                duration: phase === 'burst' ? leaf.duration / 1000 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <leaf.ShapeComponent fill={leaf.color} className="w-full h-full" />
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: phase === 'return' ? 0 : 1,
            scale: phase === 'return' ? 1.2 : 1
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-display italic text-sunlight text-7xl md:text-9xl font-black mb-4">
            WEC
          </h1>
          <p className="font-mono text-fern text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
            Western Engineering Competition
          </p>
          <p className="font-sans font-bold text-cream-dim text-xl md:text-2xl">
            2026
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
