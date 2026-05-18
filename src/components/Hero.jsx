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
    <div className="hero-shell">
      <section id="hero" className="hero-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-badge">
            <span />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Dostonbek<br />
            <span>Yokubov</span>
          </h1>

          <p className="hero-role">Data Analyst</p>

          <p className="hero-bio">
            Data analyst with a background in sales and experience across analytics,
            recruitment, and banking operations. Passionate about turning raw data
            into clear insights that improve strategy, performance, and customer experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work &rarr;</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>

          <div className="hero-stats">
            {[
              { num: '11mo', label: '@ Yandex Market' },
              { num: '8+', label: 'Tools & Skills' },
              { num: 'BI', label: 'Focused' },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-number">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[600, 420, 240].map((size, i) => (
        <div
          key={size}
          className={`hero-ring hero-ring--${i + 1}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ))}
    </div>
  )
}
