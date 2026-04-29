import { motion } from 'framer-motion';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  detail: string;
  type: 'education' | 'work' | 'certification';
}

const entries: TimelineEntry[] = [
  {
    year: '2024 — 2025',
    title: 'ETEC PG',
    subtitle: 'IT Support',
    detail:
      'Técnico em Suporte para TI com foco em Redes, Hardwares, Embarcados e Sistemas.',
    type: 'education',
  },
  {
    year: '2025 — PRESENT',
    title: 'FATEC PG',
    subtitle: 'Software Development',
    detail:
      'Graduação em Desenvolvimento de Software com foco em Back-End e arquitetura de sistemas.',
    type: 'education',
  },
  {
    year: 'JUN 2025',
    title: 'Oracle',
    subtitle: 'Database Certification',
    detail: 'Certificação profissional em banco de dados Oracle.',
    type: 'certification',
  },
  {
    year: '2025 — PRESENT',
    title: 'Suporte Técnico',
    subtitle: 'Estagiário em Mar Brasil',
    detail:
      'Atuação em diagnóstico e manutenção de hardware, redes e sistemas.',
    type: 'work',
  },
];

const typeLabels: Record<string, string> = {
  education: 'EDUCATION',
  work: 'PROFESSIONAL',
  certification: 'CERTIFICATION',
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
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
            005 — TIMELINE
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Experience
            <br />
            <span style={{ fontStyle: 'italic' }}>& Formation</span>
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
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
                        entry.type === 'certification'
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
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.55rem',
                        letterSpacing: '0.25em',
                        color: '#555555',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                      }}
                    >
                      {entry.year}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        color:
                          entry.type === 'certification'
                            ? '#C9A96E'
                            : '#333333',
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
                      fontFamily: "'Playfair Display', serif",
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
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: '#666666',
                      textTransform: 'uppercase',
                      fontWeight: 300,
                      marginBottom: '0.8rem',
                    }}
                  >
                    {entry.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
                      lineHeight: 1.8,
                      color: '#999999',
                      fontWeight: 300,
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
