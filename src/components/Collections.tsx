import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Collections() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const lang = useStore(currentLang);
  const t = dict[lang].collections;

  const projects: Project[] = [
    {
      id: 1,
      number: '01',
      title: 'Cosmic Mind',
      category: t.items.cosmic.category,
      description: t.items.cosmic.desc,
      link: 'https://github.com/Zeus-Alvs/Cosmic-Mind.git',
      linkLabel: t.btnRepo,
      tags: ['Web Systems', 'Cognitive', 'Full-Stack'],
    },
    {
      id: 2,
      number: '02',
      title: 'Aethesa',
      category: t.items.aethesa.category,
      description: t.items.aethesa.desc,
      link: 'https://github.com/Zeus-Alvs/Aethesa.git',
      linkLabel: t.btnRepo,
      tags: ['Fashion', 'Sustainability', 'Web Experience'],
    },
    {
      id: 3,
      number: '03',
      title: 'Projeto C.A.S.A.',
      category: t.items.casa.category,
      description: t.items.casa.desc,
      link: 'https://online.fliphtml5.com/zeusalvesmachado/ypqh',
      linkLabel: t.btnPub,
      tags: ['ESP32', 'Firmware', '3D Prototyping', 'TCC'],
    },
  ];

  return (
    <section id="collections" className="section-padding">
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
              color: '#A0A0A0',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 400,
            }}
          >
            {t.label}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
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
              {t.title1}
              <br />
              <span style={{ fontStyle: 'italic' }}>{t.title2}</span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: '#A0A0A0',
                fontWeight: 400,
                maxWidth: '250px',
                textAlign: 'right',
              }}
            >
              {t.subtitle}
            </p>
          </div>
          <div
            style={{
              width: '100%',
              height: '0.5px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              marginTop: '2rem',
            }}
          />
        </motion.div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              {/* Project Row */}
              <div
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
                role="button"
                tabIndex={0}
                id={`project-${project.number}`}
                onKeyDown={(e) =>
                  e.key === 'Enter' &&
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  alignItems: 'center',
                  gap: 'clamp(1.5rem, 3vw, 3rem)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                  borderBottom: '0.5px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '1.5rem';
                  const num = e.currentTarget.querySelector(
                    '.proj-num'
                  ) as HTMLElement;
                  if (num) num.style.color = '#C9A96E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                  const num = e.currentTarget.querySelector(
                    '.proj-num'
                  ) as HTMLElement;
                  if (num) num.style.color = '#888888';
                }}
              >
                {/* Number */}
                <span
                  className="proj-num"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 100,
                    color: '#888888',
                    lineHeight: 1,
                    transition: 'color 0.4s ease',
                    minWidth: 'clamp(3rem, 5vw, 4.5rem)',
                  }}
                >
                  {project.number}
                </span>

                {/* Title & Category */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: '#FFFFFF',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: '#A0A0A0',
                      textTransform: 'uppercase',
                      marginTop: '0.3rem',
                      fontWeight: 400,
                    }}
                  >
                    {project.category}
                  </p>
                </div>

                {/* Toggle icon */}
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 45 : 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  >
                    <line x1="7" y1="0" x2="7" y2="14" />
                    <line x1="0" y1="7" x2="14" y2="7" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                      opacity: { duration: 0.4, delay: 0.1 },
                    }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns:
                          'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: 'clamp(1.5rem, 3vw, 3rem)',
                        padding: '2rem 0 3rem 0',
                      }}
                    >
                      {/* Placeholder image */}
                      <div
                        style={{
                          aspectRatio: '16/10',
                          background:
                            'linear-gradient(135deg, #1a1a1a 0%, #222222 50%, #1c1c1c 100%)',
                          border: '0.5px solid rgba(255,255,255,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                            letterSpacing: '0.15em',
                            color: '#1A1A1A',
                            fontWeight: 400,
                          }}
                        >
                          {project.number}
                        </span>
                      </div>

                      {/* Details */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '1.5rem',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                            lineHeight: 1.9,
                            color: '#CCCCCC',
                            fontWeight: 400,
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                          }}
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.55rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                padding: '0.35rem 0.7rem',
                                border: '0.5px solid rgba(255,255,255,0.1)',
                                color: '#B0B0B0',
                                fontWeight: 400,
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.borderColor =
                                  '#C9A96E';
                                (e.target as HTMLElement).style.color = '#C9A96E';
                              }}
                              onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.borderColor =
                                  'rgba(255,255,255,0.1)';
                                (e.target as HTMLElement).style.color = '#B0B0B0';
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Link — Outline Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                          style={{ width: 'fit-content', marginTop: '0.5rem' }}
                        >
                          <span>{project.linkLabel}</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.8"
                          >
                            <line x1="0" y1="6" x2="10" y2="6" />
                            <polyline points="6,2 10,6 6,10" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
