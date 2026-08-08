import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

export interface GitHubRepo {
  title: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string | null;
  coverImage: string;
}

interface Props {
  repos?: GitHubRepo[];
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

export default function Collections({ repos = [] }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const lang = useStore(currentLang);
  const t = dict[lang].collections;

  const initialRepos = repos.slice(0, 3);
  const hiddenRepos = repos.slice(3);
  const displayedRepos = showAll ? repos : initialRepos;

  return (
    <section id="collections" className="section-padding">
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              gap: '1rem',
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                lineHeight: 1.1,
                flexShrink: 0,
              }}
            >
              {t.title1}
              <br />
              <span style={{ fontStyle: 'italic' }}>{t.title2}</span>
            </h2>
            <p
              style={{
                fontFamily: "'Calibri Light', Calibri, sans-serif",
                fontSize: 'clamp(0.45rem, 2vw, 0.6rem)',
                letterSpacing: '0.2em',
                color: '#A0A0A0',
                fontWeight: 400,
                maxWidth: 'clamp(140px, 40vw, 250px)',
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
          <AnimatePresence initial={false}>
            {displayedRepos.map((project, index) => {
              const num = String(index + 1).padStart(2, '0');
              const category = project.topics && project.topics.length > 0 ? project.topics[0] : 'Repository';
              const isInitial = index < 3;
              
              return (
                <motion.div
                  key={project.html_url}
                  initial={isInitial ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Project Row */}
                  <div
                    onClick={() =>
                      setExpandedId(expandedId === index ? null : index)
                    }
                    role="button"
                    tabIndex={0}
                    id={`project-${num}`}
                    onKeyDown={(e) =>
                      e.key === 'Enter' &&
                      setExpandedId(expandedId === index ? null : index)
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
                      const n = e.currentTarget.querySelector(
                        '.proj-num'
                      ) as HTMLElement;
                      if (n) n.style.color = '#C9A96E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.paddingLeft = '0';
                      const n = e.currentTarget.querySelector(
                        '.proj-num'
                      ) as HTMLElement;
                      if (n) n.style.color = '#888888';
                    }}
                  >
                    {/* Number */}
                    <span
                      className="proj-num"
                      style={{
                        fontFamily: "'Calibri Light', Calibri, sans-serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 100,
                        color: '#888888',
                        lineHeight: 1,
                        transition: 'color 0.4s ease',
                        minWidth: 'clamp(3rem, 5vw, 4.5rem)',
                      }}
                    >
                      {num}
                    </span>

                    {/* Title & Category */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                          fontWeight: 400,
                          letterSpacing: '0.06em',
                          color: '#FFFFFF',
                          lineHeight: 1.2,
                          textTransform: 'capitalize'
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Calibri Light', Calibri, sans-serif",
                          fontSize: '0.6rem',
                          letterSpacing: '0.2em',
                          color: '#A0A0A0',
                          textTransform: 'uppercase',
                          marginTop: '0.3rem',
                          fontWeight: 400,
                        }}
                      >
                        {category}
                      </p>
                    </div>

                    {/* Toggle icon */}
                    <motion.div
                      animate={{ rotate: expandedId === index ? 45 : 0 }}
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
                    {expandedId === index && (
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
                          {/* Image */}
                          <div
                            style={{
                              aspectRatio: '16/10',
                              border: '0.5px solid rgba(255,255,255,0.06)',
                              overflow: 'hidden',
                              position: 'relative'
                            }}
                          >
                            <img 
                              src={project.coverImage} 
                              alt={project.title} 
                              onError={(e) => {
                                const target = e.currentTarget;
                                // Prevent infinite loops
                                if (!target.src.includes('opengraph.githubassets.com')) {
                                  target.src = `https://opengraph.githubassets.com/${Date.now()}/Zeus-Alvs/${project.html_url.split('/').pop()}`;
                                }
                              }}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
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
                                fontFamily: "'Calibri Light', Calibri, sans-serif",
                                fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                                lineHeight: 1.9,
                                color: '#CCCCCC',
                                fontWeight: 400,
                              }}
                            >
                              {lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description}
                            </p>

                            {/* Tags */}
                            {project.topics && project.topics.length > 0 && (
                              <div
                                style={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: '0.5rem',
                                }}
                              >
                                {project.topics.map((tag) => (
                                  <span
                                    key={tag}
                                    style={{
                                      fontFamily: "'Calibri Light', Calibri, sans-serif",
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
                            )}

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                              <a
                                href={project.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                                style={{ width: 'fit-content' }}
                              >
                                <span>VER REPOSITÓRIO</span>
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
                              {project.homepage && (
                                <a
                                  href={project.homepage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-outline"
                                  style={{ width: 'fit-content', borderColor: 'rgba(201, 169, 110, 0.4)', color: '#C9A96E' }}
                                  onMouseEnter={(e) => {
                                     e.currentTarget.style.borderColor = '#C9A96E';
                                     e.currentTarget.style.background = 'rgba(201, 169, 110, 0.05)';
                                  }}
                                  onMouseLeave={(e) => {
                                     e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.4)';
                                     e.currentTarget.style.background = 'transparent';
                                  }}
                                >
                                  <span>ACESSAR WEBSITE</span>
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
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Ver Mais Button */}
        {hiddenRepos.length > 0 && (
          <motion.div 
            layout
            style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                background: 'transparent',
                border: '0.5px solid rgba(255,255,255,0.15)',
                color: '#fff',
                fontFamily: "'Calibri Light', Calibri, sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.8rem 2.5rem',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.5)';
                e.currentTarget.style.color = '#C9A96E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              {showAll ? 'Ver Menos' : 'Ver Mais'}
            </button>
          </motion.div>
        )}
        {/* Image Preloader (Hidden) */}
        <div style={{ display: 'none' }}>
          {repos.map(repo => (
            <img key={`preload-${repo.html_url}`} src={repo.coverImage} alt="preload" />
          ))}
        </div>
      </div>
    </section>
  );
}
