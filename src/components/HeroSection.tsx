import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress through the tall section (0 → 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtitle + decorations fade out locally without translating upward
  const elementsOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      {/* Subtle radial glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: '70vw',
          height: '70vw',
          maxWidth: '800px',
          maxHeight: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: glowOpacity,
        }}
      />

      {/* Decorative thin line — fades with scroll */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(2rem, 6vw, 5rem)',
          right: 'clamp(2rem, 6vw, 5rem)',
          height: '0.5px',
          backgroundColor: 'rgba(255,255,255,0.04)',
          y: '-50%',
          opacity: elementsOpacity,
        }}
      />

      {/* ═══ Main Content Block ═══ */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20vh',  // Push to bottom safely above scroll indicator
          left: 0,
          right: 0,
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Gold divider — fades with scroll */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            width: '50px',
            height: '0.5px',
            backgroundColor: '#C9A96E',
            margin: '0 auto 2rem auto',
            transformOrigin: 'center',
            opacity: elementsOpacity, // Will fade gracefully instead of scaling
          }}
        />

        {/* Subtitle — fades with scroll */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
            letterSpacing: '0.35em',
            color: '#999999',
            textTransform: 'uppercase',
            fontWeight: 300,
            opacity: elementsOpacity,
          }}
        >
          PORTFOLIO — 2026
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          opacity: scrollIndicatorOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.5rem',
            letterSpacing: '0.4em',
            color: '#333333',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ height: ['0px', '30px', '0px'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '0.5px',
            backgroundColor: '#333333',
          }}
        />
      </motion.div>

      {/* Corner marker */}
      <motion.div
        style={{
          position: 'absolute',
          top: 'clamp(1.5rem, 4vw, 3rem)',
          right: 'clamp(1.5rem, 4vw, 3rem)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.5rem',
          color: '#333333',
          letterSpacing: '0.3em',
          fontWeight: 300,
          opacity: elementsOpacity,
        }}
      >
        EST. 2024
      </motion.div>
    </section>
  );
}
