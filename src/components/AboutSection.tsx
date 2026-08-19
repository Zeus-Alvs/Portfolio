import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

export default function AboutSection() {
  const lang = useStore(currentLang);
  const t = dict[lang].about;

  return (
    <section id="about" className="section-padding">
      <div className="container-editorial">
        <motion.div
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'Calibri Light', Calibri, sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              fontWeight: 400,
            }}
          >
            {t.label}
          </p>

          {/* Main text — editorial layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'start',
            }}
          >
            {/* Left — Statement */}
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                {t.title}
              </h2>
            </div>

            {/* Right — Description */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '0.5px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
              />
              <p
                style={{
                  fontFamily: "'Calibri Light', Calibri, sans-serif",
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                  lineHeight: 1.9,
                  color: '#CCCCCC',
                  fontWeight: 400,
                  maxWidth: '480px',
                }}
              >
                {t.p1}
              </p>
              <p
                style={{
                  fontFamily: "'Calibri Light', Calibri, sans-serif",
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                  lineHeight: 1.9,
                  color: '#CCCCCC',
                  fontWeight: 400,
                  maxWidth: '480px',
                }}
              >
                {t.p2}
              </p>

              {/* Role & Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '3rem',
                  marginTop: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '0.5px solid rgba(255,255,255,0.06)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                      color: '#FFFFFF',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {t.roleValue}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Calibri Light', Calibri, sans-serif",
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      color: '#A0A0A0',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                    }}
                  >
                    {t.roleLabel}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                      color: '#FFFFFF',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {t.locationValue}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Calibri Light', Calibri, sans-serif",
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      color: '#A0A0A0',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                    }}
                  >
                    {t.locationLabel}
                  </p>
                </div>
                
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.8rem' }}>
                  <a
                    href="/Portfolio/cv-zeus-machado.pdf"
                    target="_blank"
                    className="btn-outline"
                    style={{
                      padding: '0.6rem 1.2rem',
                    }}
                  >
                    <span style={{ fontSize: '0.55rem' }}>{lang === 'en' ? 'VIEW RESUME' : 'VER CURRÍCULO'}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </a>
                  
                  {/* Contact Shortcut for Recruiters */}
                  <a
                    href="#contact"
                    className="btn-solid"
                    style={{
                      padding: '0.6rem 1.2rem', // adjust padding for this context
                    }}
                  >
                    <span style={{ fontSize: '0.55rem' }}>{lang === 'en' ? 'LET\'S CONNECT' : 'VAMOS CONECTAR'}</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                      <line x1="0" y1="6" x2="10" y2="6" />
                      <polyline points="6,2 10,6 6,10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
