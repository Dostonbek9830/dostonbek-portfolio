import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Python',     icon: 'https://cdn.simpleicons.org/python',                  bg: '#1a1a2e' },
  { name: 'Pandas',     icon: 'https://cdn.simpleicons.org/pandas/E70488',            bg: '#1a1a2e' },
  { name: 'SQL',        icon: 'https://cdn.simpleicons.org/postgresql/336791',        bg: '#1a1a2e' },
  { name: 'Power BI',   icon: 'https://cdn.simpleicons.org/powerbi/F2C811',           bg: '#1a1a2e' },
  { name: 'Tableau',    icon: 'https://cdn.simpleicons.org/tableau/E8762D',           bg: '#1a1a2e' },
  { name: 'Qlik Sense', icon: 'https://cdn.simpleicons.org/qlik/009845',              bg: '#1a1a2e' },
  { name: 'Matplotlib', icon: 'https://cdn.simpleicons.org/matplotlib/11557C',        bg: '#1a1a2e' },
  { name: 'Excel',      icon: 'https://cdn.simpleicons.org/microsoftexcel/217346',    bg: '#1a1a2e' },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="section-wrap">
        <p className="section-label">Skills & Tools</p>
        <h2 className="section-heading">What I work with</h2>
        <p style={{ color: 'rgba(232,240,248,0.5)', maxWidth: '520px', fontSize: '0.95rem', fontWeight: 300 }}>
          Currently expanding expertise in analytics, reporting, and business analysis
          with a strong interest in business intelligence and data-driven decision-making.
        </p>

        <div ref={ref} className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '12px', marginTop: '2.5rem'
        }}>
          {skills.map(skill => (
            <div key={skill.name} className="skill-chip">
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'rgba(55,138,221,0.08)',
                border: '1px solid rgba(55,138,221,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '8px'
              }}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="30" height="30"
                  style={{ objectFit: 'contain' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: none; }
        .skill-chip { background: rgba(55,138,221,0.07); border: 1px solid rgba(55,138,221,0.18); border-radius: 10px; padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 10px; transition: background 0.2s, border-color 0.2s, transform 0.15s; cursor: default; }
        .skill-chip:hover { background: rgba(55,138,221,0.14); border-color: rgba(55,138,221,0.4); transform: translateY(-2px); }
        .skill-name { font-size: 0.85rem; font-weight: 500; color: rgba(232,240,248,0.85); }
      `}</style>
    </section>
  )
}