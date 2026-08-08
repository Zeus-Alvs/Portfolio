import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  detail: string;
  type: 'education' | 'work' | 'certification';
  completed?: boolean;
}

export default function Timeline() {
  const lang = useStore(currentLang);
  const t = dict[lang].timeline;

  const entries: TimelineEntry[] = [
    {
      year: '2024 — 2025',
      title: 'ETEC PG',
      subtitle: t.items.etec.subtitle,
      detail: t.items.etec.detail,
      type: 'education',
      completed: true,
    },
    {
      year: '2025 — PRESENT',
      title: 'FATEC PG',
      subtitle: t.items.fatec.subtitle,
      detail: t.items.fatec.detail,
      type: 'education',
    },
    {
      year: 'JUN 2025',
      title: 'Oracle',
      subtitle: t.items.oracle.subtitle,
      detail: t.items.oracle.detail,
      type: 'certification',
    },
    {
      year: '2025 — 2026',
      title: 'Suporte Técnico',
      subtitle: t.items.suporte.subtitle,
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
            {entries.map((entry, i) => (
              <motion.div
                key={entry.title}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '14px 1fr',
                  gap: 'clamp(1rem, 2vw, 2rem)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                  borderBottom: '0.5px solid rgba(255,255,255,0.04)',
                }}
              >
                {/* Dot on timeline */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '0.3rem',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: '0.5px solid rgba(255,255,255,0.2)',
                      backgroundColor:
                        entry.type === 'certification' || entry.completed
                          ? '#C9A96E'
                          : 'transparent',
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
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      color: '#FFFFFF',
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
                  <p
                    style={{
                      fontFamily: "'Calibri Light', Calibri, sans-serif",
                      fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
                      lineHeight: 1.8,
                      color: '#CCCCCC',
                      fontWeight: 400,
                      maxWidth: '600px',
                    }}
                  >
                    {entry.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
