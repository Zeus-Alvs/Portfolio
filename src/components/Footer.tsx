import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { dict } from '../i18n/dict';

export default function Footer() {
  const lang = useStore(currentLang);
  const t = dict[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <style>{`
        .social-link {
          transition: color 0.3s ease !important;
        }
        .social-link:hover {
          color: #C9A96E !important;
        }
      `}</style>
      
      {/* Top border */}
      <div
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6rem',
            letterSpacing: '0.4em',
            color: '#A0A0A0',
            textTransform: 'uppercase',
            fontWeight: 400,
          }}
        >
          {t.label}
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '0.12em',
            color: '#FFFFFF',
            textAlign: 'center',
            marginRight: '-0.12em',
          }}
        >
          {t.title1} <em style={{ fontStyle: 'italic' }}>{t.title2}</em>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: '#A0A0A0',
            textTransform: 'uppercase',
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: '400px',
          }}
        >
          {t.subtitle}
        </p>

        {/* Gold divider */}
        <div
          style={{
            width: '30px',
            height: '0.5px',
            backgroundColor: '#C9A96E',
            margin: '0.5rem 0',
          }}
        />

        {/* Email */}
        <a
          href="mailto:alvesmachado.zeus@gmail.com"
          id="contact-email"
          className="btn-outline"
          style={{ marginTop: '0.5rem' }}
        >
          <span>{t.btn}</span>
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

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <a
            href="https://github.com/Zeus-Alvs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: '#888888',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            GITHUB
          </a>

          <span style={{ color: '#1A1A1A', fontSize: '0.3rem' }}>●</span>

          <a
            href="https://www.linkedin.com/in/zeus-alves-machado-2964b8370"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: '#888888',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            LINKEDIN
          </a>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            paddingTop: '1.5rem',
            borderTop: '0.5px solid rgba(255,255,255,0.04)',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.5rem',
              letterSpacing: '0.2em',
              color: '#888888',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            © {currentYear} {t.copyright}
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.5rem',
              letterSpacing: '0.2em',
              color: '#888888',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            {t.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
