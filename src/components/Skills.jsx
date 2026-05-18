import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Python',     icon: '/logos/python.svg',                                    bg: '#1a1a2e' },
  { name: 'Pandas',     icon: '/logos/pandas.svg',                                    bg: '#1a1a2e' },
  { name: 'SQL',        icon: '/logos/sql.svg',                                       bg: '#1a1a2e' },
  { name: 'Power BI',   icon: '/logos/power-bi.svg',                                  bg: '#1a1a2e' },
  { name: 'Tableau',    icon: '/logos/tableau.svg',                                   bg: '#1a1a2e' },
  { name: 'Qlik Sense', icon: '/logos/qlik-sense.svg',                                bg: '#1a1a2e' },
  { name: 'Matplotlib', icon: '/logos/matplotlib.svg',                                bg: '#1a1a2e' },
  { name: 'Excel',      icon: '/logos/excel.svg',                                     bg: '#1a1a2e' },
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
        <p className="section-copy">
          Currently expanding expertise in analytics, reporting, and business analysis
          with a strong interest in business intelligence and data-driven decision-making.
        </p>

        <div ref={ref} className="skills-grid fade-up">
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
                  className="skill-logo"
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
        .skill-logo { width: 32px; height: 32px; object-fit: contain; }
        .skill-name { font-size: 0.85rem; font-weight: 500; color: rgba(232,240,248,0.85); }
      `}</style>
    </section>
  )
}
