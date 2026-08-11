import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  detail: string[];
  link?: { url: string; label: string };
  type: 'education' | 'work' | 'certification';
  completed?: boolean;
}

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const lang = useStore(currentLang);
  const t = dict[lang].timeline;

  const entries: TimelineEntry[] = [
    {
      year: '2024 — 2025',
      title: 'ETEC PG',
      subtitle: t.items.etec.subtitle,
      desc: t.items.etec.desc,
      detail: t.items.etec.detail,
      link: t.items.etec.link,
      type: 'education',
      completed: true,
    },
    {
      year: '2025 — PRESENT',
      title: 'FATEC PG',
      subtitle: t.items.fatec.subtitle,
      desc: t.items.fatec.desc,
      detail: t.items.fatec.detail,
      type: 'education',
    },
    {
      year: 'JUN 2025',
      title: 'Oracle',
      subtitle: t.items.oracle.subtitle,
      desc: t.items.oracle.desc,
      detail: t.items.oracle.detail,
      link: t.items.oracle.link,
      type: 'certification',
    },
    {
      year: '2025 — 2026',
      title: 'Mar Brasil',
      subtitle: t.items.suporte.subtitle,
      desc: t.items.suporte.desc,
      detail: t.items.suporte.detail,
      type: 'work',
      completed: true,
    },
  ];

  const typeLabels: Record<string, string> = {
    education: t.types.education,
    work: t.types.work,
    certification: t.types.certification,
  };

  return (
    <section id="timeline" className="section-padding">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <p
            style={{
              fontFamily: "'Calibri Light', Calibri, sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 400,
            }}
          >
            {t.label}
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            {t.title1}
            <br />
            <span style={{ fontStyle: 'italic' }}>{t.title2}</span>
          </h2>
          <div
            style={{
              width: '100%',
              height: '0.5px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              marginTop: '2rem',
            }}
          />
        </motion.div>

        {/* Timeline entries */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '7px',
              top: '0',
              bottom: '0',
              width: '0.5px',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {entries.map((entry, i) => {
              const isExpanded = expandedId === entry.title;
              const isHovered = hoveredId === entry.title;
              return (
              <motion.div
                key={entry.title}
                onClick={() => setExpandedId(isExpanded ? null : entry.title)}
                onMouseEnter={() => setHoveredId(entry.title)}
                onMouseLeave={() => setHoveredId(null)}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '14px 1fr',
                  gap: 'clamp(1rem, 2vw, 2rem)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) 1rem',
                  borderBottom: '0.5px solid rgba(255,255,255,0.04)',
                  cursor: 'pointer',
                  backgroundColor: isHovered ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderRadius: '4px',
                }}
                className="group"
              >
                {/* Dot on timeline */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '0.3rem',
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: isHovered || isExpanded ? 1.3 : 1,
                      backgroundColor: entry.type === 'certification' || entry.completed ? '#C9A96E' : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: '0.5px solid rgba(255,255,255,0.2)',
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Meta row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      marginBottom: '0.8rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Calibri Light', Calibri, sans-serif",
                        fontSize: '0.55rem',
                        letterSpacing: '0.25em',
                        color: '#A0A0A0',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                      }}
                    >
                      {entry.year}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Calibri Light', Calibri, sans-serif",
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        color:
                          entry.type === 'certification'
                            ? '#C9A96E'
                            : '#888888',
                        fontWeight: 400,
                        padding: '0.2rem 0.5rem',
                        border: `0.5px solid ${entry.type === 'certification'
                            ? 'rgba(201,169,110,0.3)'
                            : 'rgba(255,255,255,0.08)'
                          }`,
                        textTransform: 'uppercase',
                      }}
                    >
                      {typeLabels[entry.type]}
                    </span>
                    
                    {/* Toggle Indicator */}
                    <motion.div
                      animate={{ 
                        scale: isHovered ? 1.2 : 1,
                        y: (isHovered && !isExpanded) ? [0, -3, 0] : 0
                      }}
                      transition={{ 
                        scale: { duration: 0.2 },
                        y: {
                          duration: (isHovered && !isExpanded) ? 0.6 : 0.2,
                          repeat: (isHovered && !isExpanded) ? Infinity : 0,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        marginLeft: 'auto',
                        width: '24px',
                        height: '24px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isExpanded ? '#C9A96E' : isHovered ? '#FFFFFF' : '#A0A0A0',
                        border: isHovered ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                        borderRadius: '50%',
                      }}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'backOut' }}
                        style={{
                          width: '10px',
                          height: '0.5px',
                          backgroundColor: 'currentColor',
                          position: 'absolute',
                        }}
                      />
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 90 }}
                        transition={{ duration: 0.3, ease: 'backOut' }}
                        style={{
                          width: '10px',
                          height: '0.5px',
                          backgroundColor: 'currentColor',
                          position: 'absolute',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      color: isExpanded ? '#FFFFFF' : '#E0E0E0',
                      transition: 'color 0.3s ease',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Calibri Light', Calibri, sans-serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: '#B0B0B0',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      marginBottom: '0.8rem',
                    }}
                  >
                    {entry.subtitle}
                  </p>
                  
                  {/* Fixo na tela */}
                  <p
                    style={{
                      fontFamily: "'Calibri Light', Calibri, sans-serif",
                      fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
                      lineHeight: 1.6,
                      color: '#DDDDDD',
                      fontWeight: 400,
                      maxWidth: '650px',
                    }}
                  >
                    {entry.desc}
                  </p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                          {entry.detail.map((parag, pIdx) => (
                            <p
                              key={pIdx}
                              style={{
                                fontFamily: "'Calibri Light', Calibri, sans-serif",
                                fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
                                lineHeight: 1.6,
                                color: '#AAAAAA',
                                fontWeight: 400,
                                maxWidth: '650px',
                                paddingLeft: '1rem',
                                borderLeft: '1px solid rgba(255,255,255,0.1)'
                              }}
                            >
                              {parag}
                            </p>
                          ))}
                          
                          {entry.link && (
                            <a
                              href={entry.link.url}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setModalImage(entry.link!.url);
                              }}
                              className="social-link"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '0.5rem',
                                textDecoration: 'none',
                                color: '#C9A96E',
                                fontFamily: "'Calibri Light', Calibri, sans-serif",
                                fontSize: '0.6rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                width: 'fit-content'
                              }}
                            >
                              {entry.link.label}
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                                <line x1="0" y1="6" x2="10" y2="6" />
                                <polyline points="6,2 10,6 6,10" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
            }}
          >
            <motion.img
              src={modalImage}
              alt="Diploma / Certification"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                cursor: 'default',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setModalImage(null)}
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 2.5rem)',
                right: 'clamp(1rem, 3vw, 2.5rem)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
