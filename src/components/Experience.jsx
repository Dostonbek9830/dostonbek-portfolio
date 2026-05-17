const experiences = [
  {
    date: 'May 2025 — Mar 2026',
    role: 'Junior Data Analyst',
    company: 'Yandex Market · 11 months',
    desc: 'Analytics, reporting, and business analysis. Building dashboards, cleaning datasets, and delivering data-driven insights to improve strategy, performance, and customer experience.'
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <p className="section-label">Background</p>
        <h2 className="section-heading">Experience</h2>

        <div style={{ marginTop: '2.5rem' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: '2rem',
              paddingBottom: '2.5rem'
            }}>
              <div style={{
                fontSize: '0.8rem',
                color: 'rgba(232,240,248,0.35)',
                letterSpacing: '0.05em',
                paddingTop: '2px',
                textAlign: 'right'
              }}>{exp.date}</div>

              <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-0.5rem', top: '7px',
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#378ADD', border: '2px solid #050f1c',
                  boxShadow: '0 0 0 2px rgba(55,138,221,0.3)'
                }} />
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '1rem',
                  fontWeight: 600, color: '#e8f0f8', marginBottom: '2px'
                }}>{exp.role}</div>
                <div style={{
                  fontSize: '0.85rem', color: '#378ADD', marginBottom: '0.5rem'
                }}>{exp.company}</div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(232,240,248,0.5)',
                  lineHeight: 1.7
                }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}