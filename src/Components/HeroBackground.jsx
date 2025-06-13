/**
 * Adapted from BetterUI's "Moving Dots Background" component linked below:
 * https://betterui.design/docs/components/moving-dots-background
 *
 * Original implementation © BetterUI which "features animated dots moving 
 * across the screen, creating an engaging background effect."
 *
 * If you reuse this, please credit BetterUI for the original concept.
 * I have added more individual randomness to dots and created a responsive
 * amount of dots based on window size.
 */

'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #d6dcd9;
  pointer-events: none;
`;

const Dot = styled(motion.div)`
  position: absolute;
  border-radius: 9999px;
  background-color: #b3c0bc;
`;

export default function MovingDotsBackground({
  minSize = 5,
  maxSize = 20,
}) {
  const [numDots, setNumDots] = useState(70); // Default large screen amount of dots
  useEffect(() => {
    const updateDensity = () => setNumDots((window.innerWidth * window.innerHeight) / 30000);
    window.addEventListener('resize', updateDensity);
    return () => window.removeEventListener('resize', updateDensity);
  }, []);

  const dots = useMemo(() => {
    return Array.from({ length: numDots }).map(() => {
      const dx = Math.random() * 50 - 20; // Additional movement to vary randomness per dot
      const dy = Math.random() * 50 - 20;
      return {
        id: crypto.randomUUID(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: 5 + Math.random() * 3,
        dx,
        dy
      };

    })
  }, [numDots, minSize, maxSize]);

  return (
    <BackgroundContainer aria-hidden="true">
      {dots.map((dot) => (
        <Dot
          key={dot.id}
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [0, dot.dx, 0],
            y: [0, dot.dy, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </BackgroundContainer>
  );
}
