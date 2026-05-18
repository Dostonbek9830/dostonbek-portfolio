const experiences = [
  {
    date: 'May 2025 - Mar 2026',
    role: 'Junior Data Analyst',
    company: 'Yandex Market - 11 months',
    desc: 'Analytics, reporting, and business analysis. Building dashboards, cleaning datasets, and delivering data-driven insights to improve strategy, performance, and customer experience.'
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <p className="section-label">Background</p>
        <h2 className="section-heading">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>

              <div className="timeline-content">
                <span className="timeline-dot" />
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
