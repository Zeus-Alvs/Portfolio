import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const GITHUB_URL = 'https://github.com/Zeus-Alvs';
const PROFILE_IMG = '/images/github-avatar.jpg';

export default function GitHubSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#555555',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 300,
            }}
          >
            004 — GITHUB
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            Open
            <br />
            <span style={{ fontStyle: 'italic' }}>Source</span>
          </h2>
          <div
            style={{
              width: '100%',
              height: '0.5px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          />
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            INTERACTIVE GITHUB ID CARD — Split Layout
            Photo left (full height) | Info right
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            background: '#0A0A0A',
            border: '0.5px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '2px',
            overflow: 'hidden',
            cursor: 'default',
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) 1.6fr',
            minHeight: '380px',
            transition: 'border-color 0.6s ease',
            ...(isHovered && { borderColor: 'rgba(201, 169, 110, 0.15)' }),
          }}
        >
          {/* ── Mouse-tracking Glow ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 3,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease',
              background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(201, 169, 110, 0.06), transparent 40%)`,
            }}
          />

          {/* ── LEFT: Circular Avatar ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            <div
              style={{
                width: 'clamp(168px, 22vw, 264px)',
                height: 'clamp(168px, 22vw, 264px)',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#111111',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
              }}
            >
              {!imgError ? (
                <img
                  src={PROFILE_IMG}
                  alt="Zeus Alves Machado"
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    filter: isHovered ? 'grayscale(0%) contrast(1.05)' : 'grayscale(100%) contrast(1.15)',
                    transition: 'filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                />
              ) : (
                /* Elegant monogram placeholder */
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(170deg, #111111, #080808)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                      color: 'rgba(255,255,255,0.06)',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      userSelect: 'none',
                    }}
                  >
                    ZA
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Info Panel ── */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top: Identity */}
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  letterSpacing: '0.06em',
                  lineHeight: 1.15,
                  marginBottom: '0.6rem',
                }}
              >
                Zeus Alves Machado
              </h3>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.6rem, 1vw, 0.72rem)',
                  letterSpacing: '0.15em',
                  color: '#C9A96E',
                  fontWeight: 400,
                  display: 'inline-block',
                  marginBottom: '1.2rem',
                }}
              >
                @Zeus-Alvs
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.65rem, 1vw, 0.78rem)',
                  color: '#999999',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  letterSpacing: '0.02em',
                  maxWidth: '400px',
                }}
              >
                Full-Stack Engineering & Embedded Systems | FATEC & ETEC.
              </p>

              {/* Divider */}
              <div
                style={{
                  width: '100%',
                  height: '0.5px',
                  background: 'rgba(255,255,255,0.05)',
                  margin: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                }}
              />
            </div>

            {/* Bottom: Stack + CTA */}
            <div>
              {/* Subliminal Tech Stack */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.48rem, 0.7vw, 0.58rem)',
                  letterSpacing: '0.3em',
                  color: 'rgba(255, 255, 255, 0.25)',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  marginBottom: 'clamp(1.5rem, 2vw, 2rem)',
                }}
              >
                Main Stack: Next.js • Python • Java • SQL
              </p>

              {/* CTA */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.65rem 1.5rem',
                    border: '0.5px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    background: 'transparent',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) => {
                    const t = e.currentTarget;
                    t.style.borderColor = 'rgba(201, 169, 110, 0.4)';
                    t.style.color = '#C9A96E';
                    t.style.letterSpacing = '0.3em';
                  }}
                  onMouseLeave={(e) => {
                    const t = e.currentTarget;
                    t.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    t.style.color = '#FFFFFF';
                    t.style.letterSpacing = '0.25em';
                  }}
                >
                  <span>View Full Profile</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  >
                    <line x1="0" y1="10" x2="10" y2="0" />
                    <polyline points="3,0 10,0 10,7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Decorative corner accents ── */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '16px',
              height: '16px',
              borderTop: '0.5px solid rgba(201, 169, 110, 0.15)',
              borderRight: '0.5px solid rgba(201, 169, 110, 0.15)',
              pointerEvents: 'none',
              zIndex: 4,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              width: '16px',
              height: '16px',
              borderBottom: '0.5px solid rgba(201, 169, 110, 0.15)',
              borderLeft: '0.5px solid rgba(201, 169, 110, 0.15)',
              pointerEvents: 'none',
              zIndex: 4,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            gap: '0',
            marginTop: '1px',
            borderTop: '0.5px solid rgba(255,255,255,0.04)',
          }}
        >
          {[
            { label: 'REPOSITORIES', value: 'PUBLIC' },
            { label: 'FOCUS', value: 'BACK-END' },
            { label: 'STACK', value: 'PHP · JAVA · C++' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)',
                borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.04)' : 'none',
                borderBottom: '0.5px solid rgba(255,255,255,0.04)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.5rem',
                  letterSpacing: '0.25em',
                  color: '#333333',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                  letterSpacing: '0.1em',
                  color: '#999999',
                  fontWeight: 300,
                }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Responsive: stack on mobile ── */}
        <style>{`
          @media (max-width: 640px) {
            #github .container-editorial > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              min-height: auto !important;
            }
            #github .container-editorial > div:nth-child(2) > div:first-child {
              padding-bottom: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
