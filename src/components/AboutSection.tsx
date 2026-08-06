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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
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
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                {t.title1}
                <br />
                {t.title2}
                <br />
                <span style={{ fontStyle: 'italic', color: '#C9A96E' }}>
                  {t.title3}
                </span>
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
                  fontFamily: "'Inter', sans-serif",
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
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                  lineHeight: 1.9,
                  color: '#CCCCCC',
                  fontWeight: 400,
                  maxWidth: '480px',
                }}
              >
                {t.p2}
              </p>

              {/* Stats — minimal */}
              <div
                style={{
                  display: 'flex',
                  gap: '3rem',
                  marginTop: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '0.5px solid rgba(255,255,255,0.06)',
                }}
              >
                {[
                  { value: '3+', label: t.stats.projects },
                  { value: 'FATEC', label: t.stats.software },
                  { value: 'ETEC', label: t.stats.embedded },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.4rem',
                        color: '#FFFFFF',
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        color: '#A0A0A0',
                        textTransform: 'uppercase',
                        fontWeight: 400,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
