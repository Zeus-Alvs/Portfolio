import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'COLLECTIONS', href: '#collections' },
  { label: 'ATELIER', href: '#atelier' },
  { label: 'GITHUB', href: '#github' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'CONTACT', href: '#contact' },
];

const titleLetters = 'ZEUS'.split('');

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollDist, setScrollDist] = useState(800);
  const [yTravel, setYTravel] = useState(400);
  const [targetScale, setTargetScale] = useState(0.12);
  const { scrollY } = useScroll();

  // Wait for client-side mount before using createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const h = window.innerHeight;
    setScrollDist(Math.max(600, h * 0.7));
    setYTravel((h / 2) - 35);
    // Mobile-only overrides (desktop values untouched)
    if (window.innerWidth <= 768) {
      setTargetScale(0.24);
      setScrollDist(Math.max(350, h * 0.4));  // Finish animation earlier
      setYTravel(h * 0.43 - 20);              // Push docked ZEUS up to visually center in navbar
    }
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest >= scrollDist - 10);
    });
    return () => unsubscribe();
  }, [scrollY, scrollDist]);

  useEffect(() => {
    const pageContent = document.getElementById('page-content');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (pageContent) {
        pageContent.style.opacity = '0';
        pageContent.style.transition = 'opacity 0.4s ease';
        pageContent.style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = '';
      if (pageContent) {
        pageContent.style.opacity = '1';
        pageContent.style.pointerEvents = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (pageContent) {
        pageContent.style.opacity = '1';
        pageContent.style.pointerEvents = '';
      }
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const titleScale = useTransform(scrollY, [0, scrollDist], [1, targetScale]);
  const yOffsetNumber = useTransform(scrollY, [0, scrollDist * 0.55], [0, yTravel]);
  const titleY = useTransform(yOffsetNumber, (val) => `calc(-50% - ${val}px)`);

  // ═══════════════════════════════════════════════════════════
  // Portal: Renders nav + overlay directly on <body>, outside <main>.
  // This ensures the menu stays visible when #page-content is hidden,
  // and the canvas animation (z-index 0) shows through the overlay.
  // ═══════════════════════════════════════════════════════════
  const navContent = (
    <>
      {/* ── Mobile-only overrides (does NOT affect desktop) ── */}
      <style>{`
        @media (max-width: 768px) {
          .zeus-letter {
            font-size: clamp(5.5rem, 25vw, 8rem) !important;
          }
          .zeus-title-anchor {
            top: 43vh !important;
          }
          .burger-link {
            font-size: 1.5rem !important;
            padding: 0.8rem 1.5rem !important;
          }
        }
      `}</style>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          zIndex: 1000,
          padding: '0 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: isVisible && !isOpen ? 'blur(12px)' : 'none',
          background: isVisible && !isOpen ? 'rgba(0,0,0,0.6)' : 'transparent',
          borderBottom: isVisible && !isOpen ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid transparent',
          transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
          pointerEvents: isVisible || isOpen ? 'auto' : 'none',
        }}
      >
        {/* Spacer on the left to balance the nav layout */}
        <div style={{ width: '40px' }} />

        {/* Central Logo - Spans across Hero to Nav fluidly */}
        <motion.a
          className="zeus-title-anchor"
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
          style={{
            position: 'absolute',
            top: '50vh',
            left: '50%',
            x: '-50%',
            y: titleY,
            scale: titleScale,
            transformOrigin: 'center center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            textDecoration: 'none',
            zIndex: 1001,
            pointerEvents: isVisible ? 'auto' : 'none',
            transition: 'none',
          }}
        >
          {titleLetters.map((letter, i) => (
            <motion.span
              className="zeus-letter"
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                y: isLoaded ? 0 : 80,
                rotateX: isLoaded ? 0 : -90,
              }}
              transition={{
                duration: 1.1,
                delay: 0.5 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(6rem, 22vw, 18rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 0.85,
                display: 'inline-block',
                letterSpacing: '0.08em',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.a>

        {/* Burger Menu */}
        <motion.button
          id="nav-burger"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible || isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'flex-end',
            pointerEvents: isVisible || isOpen ? 'auto' : 'none',
          }}
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
              width: isOpen ? 24 : 24,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'block', height: '0.5px', backgroundColor: '#FFFFFF' }}
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1, width: isOpen ? 0 : 14 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block', height: '0.5px', backgroundColor: '#FFFFFF' }}
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -4 : 0,
              width: isOpen ? 24 : 18,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'block', height: '0.5px', backgroundColor: '#FFFFFF' }}
          />
        </motion.button>
      </motion.nav>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'none',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '5px',
            }}
          >
            {/* Thin decorative lines */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '5%',
              right: '5%',
              height: '0.5px',
              background: 'rgba(255,255,255,0.04)',
              transform: 'translateY(-50%)',
            }} />

            {navLinks.map((link, i) => (
              <motion.a
                className="burger-link"
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(0.72rem, 2.64vw, 2.16rem)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '1.2rem 2rem',
                  fontWeight: 400,
                  transition: 'color 0.4s ease, letter-spacing 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#C9A96E';
                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.2em';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.08em';
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2.5rem',
                right: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '0.5px solid rgba(255,255,255,0.06)',
                paddingTop: '1.5rem',
              }}
            >
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                color: '#555',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}>
                SOFTWARE SYSTEMS & BACK-END
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                color: '#555',
                letterSpacing: '0.25em',
              }}>
                © 2026
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Renders normally in the tree. The #page-content wrapper in index.astro 
  // ensures only the page content hides, while the Navbar remains visible.
  return navContent;
}
