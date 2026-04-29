import { motion } from 'framer-motion';

export default function AboutSection() {
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
              color: '#555555',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              fontWeight: 300,
            }}
          >
            001 — ABOUT
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
                Engenharia
                <br />
                de software
                <br />
                <span style={{ fontStyle: 'italic', color: '#C9A96E' }}>
                  do hardware ao código.
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
                  color: '#999999',
                  fontWeight: 300,
                  maxWidth: '480px',
                }}
              >
                Estudante de Desenvolvimento de Software na FATEC, com base
                técnica formada pela ETEC em infraestrutura, suporte e hardware.
                Atualmente, foco minha evolução na construção de sistemas que
                unem lógica de back-end eficiente a interfaces intuitivas.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                  lineHeight: 1.9,
                  color: '#999999',
                  fontWeight: 300,
                  maxWidth: '480px',
                }}
              >
                Minha trajetória transita entre o desenvolvimento de
                sistemas embarcados e a arquitetura web moderna, sempre
                buscando o equilíbrio entre a precisão técnica e a utilidade
                prática do software.
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
                  { value: '3+', label: 'PROJECTS' },
                  { value: 'FATEC', label: 'SOFTWARE DEV' },
                  { value: 'ETEC', label: 'EMBEDDED SYSTEMS' },
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
                        color: '#555555',
                        textTransform: 'uppercase',
                        fontWeight: 300,
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
