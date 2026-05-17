import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        el.style.opacity = '1'
        el.style.transform = 'none'
      }, 100)
    }
  }, [])

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <section id="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '8rem 4rem 4rem', maxWidth: '1200px', margin: '0 auto'
      }}>
        <div ref={contentRef} style={{ maxWidth: '680px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(55,138,221,0.1)', border: '1px solid rgba(55,138,221,0.25)',
            borderRadius: '100px', padding: '6px 16px', fontSize: '0.8rem',
            color: '#85B7EB', letterSpacing: '0.08em', fontWeight: 500,
            marginBottom: '2rem', textTransform: 'uppercase'
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#1D9E75', display: 'inline-block',
              animation: 'pulse 2s infinite'
            }} />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', color: '#e8f0f8',
            marginBottom: '0.25rem'
          }}>
            Dostonbek<br />
            <span style={{ color: '#378ADD' }}>Yokubov</span>
          </h1>

          {/* Title */}
          <p style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 500, color: 'rgba(232,240,248,0.45)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>Data Analyst</p>

          {/* Bio */}
          <p style={{
            fontSize: '1.05rem', color: 'rgba(232,240,248,0.7)',
            lineHeight: 1.8, maxWidth: '560px',
            marginBottom: '2.5rem', fontWeight: 300
          }}>
            Data analyst with a background in sales and experience across analytics,
            recruitment, and banking operations. Passionate about turning raw data
            into clear insights that improve strategy, performance, and customer experience.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '2.5rem', marginTop: '3.5rem',
            paddingTop: '2.5rem', borderTop: '1px solid rgba(55,138,221,0.12)'
          }}>
            {[
              { num: '11mo', label: '@ Yandex Market' },
              { num: '8+', label: 'Tools & Skills' },
              { num: 'BI', label: 'Focused' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '1.8rem',
                  fontWeight: 700, color: '#378ADD', lineHeight: 1
                }}>{s.num}</div>
                <div style={{
                  fontSize: '0.78rem', color: 'rgba(232,240,248,0.4)',
                  textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '4px'
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative circles */}
      {[600, 420, 240].map((size, i) => (
        <div key={size} style={{
          position: 'absolute', right: i === 2 ? '60px' : i === 1 ? '-60px' : '-120px',
          top: '50%', transform: 'translateY(-50%)',
          width: `${size}px`, height: `${size}px`, borderRadius: '50%',
          border: i === 2 ? 'none' : `1px solid rgba(55,138,221,${i === 0 ? '0.08' : '0.06'})`,
          background: i === 2 ? 'rgba(55,138,221,0.04)' : 'transparent',
          pointerEvents: 'none'
        }} />
      ))}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  )
}