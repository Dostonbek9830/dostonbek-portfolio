const projects = [
  {
    tag: 'Power BI · Sales Analytics',
    title: 'Sales Performance Dashboard',
    desc: 'End-to-end sales analytics dashboard built on a real dataset. Covers KPI tracking, regional performance, segment analysis, year-over-year trends, and product-level insights across two pages.',
    tools: ['Power BI', 'Python', 'Pandas', 'Data Cleaning'],
    link: 'https://app.powerbi.com/groups/72446848-ceb7-4f30-855a-4dee009e04a4/reports/e80a62ec-237a-4d8c-bc7c-263de2d91950/5de838b46a930f6c5dd6?experience=power-bi',
    live: true
  },
  {
    tag: 'Tableau · Banking Analytics  ',
    title: 'Banking Analytics',
    desc: 'More analytics projects coming soon...',
    tools: ['Tableau', 'Python', 'Pandas','Excel'],
    link: 'https://public.tableau.com/app/profile/dostonbek.yokubov/viz/BankingAnalytics_17800850011500/LoanRiskAnalytics?publish=yes',
    live: true
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'rgba(55,138,221,0.025)' }}>
      <div className="section-wrap">
        <p className="section-label">Portfolio</p>
        <h2 className="section-heading">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        .project-card { background: rgba(10,22,40,0.8); border: 1px solid rgba(55,138,221,0.15); border-radius: 8px; padding: 1.75rem; display: flex; flex-direction: column; gap: 1rem; transition: border-color 0.2s, transform 0.2s; }
        .project-card:hover { border-color: rgba(55,138,221,0.5); transform: translateY(-3px); }
        .project-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #1D9E75; background: rgba(29,158,117,0.1); border: 1px solid rgba(29,158,117,0.2); border-radius: 100px; padding: 3px 10px; width: fit-content; }
        .project-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 600; color: #e8f0f8; line-height: 1.3; }
        .project-desc { font-size: 0.9rem; color: rgba(232,240,248,0.55); line-height: 1.7; flex: 1; }
        .tool-pill { font-size: 0.75rem; padding: 3px 10px; border-radius: 100px; background: rgba(55,138,221,0.1); color: #85B7EB; border: 1px solid rgba(55,138,221,0.15); }
        .project-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; color: #378ADD; text-decoration: none; font-weight: 500; margin-top: 0.25rem; transition: gap 0.2s; }
        .project-link:hover { gap: 10px; }
      `}</style>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{ opacity: project.live ? 1 : 0.5 }}>
      <span className="project-tag" style={!project.live ? {
        color: 'rgba(232,240,248,0.3)',
        background: 'rgba(232,240,248,0.04)',
        borderColor: 'rgba(232,240,248,0.08)'
      } : {}}>{project.tag}</span>

      <h3 className="project-title" style={!project.live ? { color: 'rgba(232,240,248,0.3)' } : {}}>
        {project.title}
      </h3>

      <p className="project-desc">{project.desc}</p>

      {project.tools.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tools.map(t => <span key={t} className="tool-pill">{t}</span>)}
        </div>
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          View Live Dashboard →
        </a>
      )}
    </div>
  )
}
