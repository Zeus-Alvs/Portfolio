import { motion } from 'framer-motion';

interface TechCategory {
  label: string;
  items: string[];
}

const categories: TechCategory[] = [
  {
    label: 'LANGUAGES',
    items: ['C++', 'Java', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB'],
  },
  {
    label: 'FRAMEWORKS & TOOLS',
    items: ['Next.js', 'Laravel', 'Django', 'Docker', 'Git', 'N8N', 'Blender'],
  },
  {
    label: 'HARDWARE',
    items: ['Manutenção de Hardware', 'Redes', 'Sistemas embarcados'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Atelier() {
  return (
    <section id="atelier" className="section-padding">
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
            003 — THE ATELIER
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
            Tech
            <br />
            <span style={{ fontStyle: 'italic' }}>Stack</span>
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

        {/* Categories Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Category Label */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.55rem',
                  letterSpacing: '0.35em',
                  color: '#555555',
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                  fontWeight: 400,
                }}
              >
                {cat.label}
              </p>

              {/* Items Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
                  gap: '1px',
                  border: '0.5px solid rgba(255,255,255,0.06)',
                }}
              >
                {cat.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    style={{
                      padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)',
                      background: '#000000',
                      border: '0.5px solid rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      cursor: 'default',
                      transition:
                        'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                    onMouseEnter={(e) => {
                      const t = e.currentTarget;
                      t.style.background = '#0A0A0A';
                      t.style.borderColor = 'rgba(201,169,110,0.2)';
                      const label = t.querySelector('.tech-label') as HTMLElement;
                      if (label) label.style.color = '#C9A96E';
                      const dot = t.querySelector('.tech-dot') as HTMLElement;
                      if (dot) dot.style.backgroundColor = '#C9A96E';
                    }}
                    onMouseLeave={(e) => {
                      const t = e.currentTarget;
                      t.style.background = '#000000';
                      t.style.borderColor = 'rgba(255,255,255,0.04)';
                      const label = t.querySelector('.tech-label') as HTMLElement;
                      if (label) label.style.color = '#999999';
                      const dot = t.querySelector('.tech-dot') as HTMLElement;
                      if (dot) dot.style.backgroundColor = '#333333';
                    }}
                  >
                    {/* Dot indicator */}
                    <div
                      className="tech-dot"
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#333333',
                        flexShrink: 0,
                        transition: 'background-color 0.4s ease',
                      }}
                    />
                    <span
                      className="tech-label"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
                        letterSpacing: '0.1em',
                        color: '#999999',
                        fontWeight: 300,
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
