export default function DataBackdrop() {
  return (
    <div className="data-backdrop" aria-hidden="true">
      <div className="data-panel data-panel--main">
        <div className="data-panel__header">
          <span />
          <span />
          <span />
        </div>
        <div className="data-panel__grid">
          <div className="mini-card mini-card--wide">
            <span />
            <span />
          </div>
          <div className="mini-card">
            <span />
            <span />
          </div>
          <div className="viz-bars">
            {[38, 72, 56, 92, 64].map((height, index) => (
              <span key={index} style={{ '--bar-height': `${height}%` }} />
            ))}
          </div>
          <div className="viz-line">
            <span className="viz-line__trace" />
            <span className="viz-dot viz-dot--one" />
            <span className="viz-dot viz-dot--two" />
            <span className="viz-dot viz-dot--three" />
          </div>
        </div>
      </div>

      <div className="chart-stack chart-stack--one">
        <span />
        <span />
        <span />
      </div>

      <div className="chart-stack chart-stack--two">
        <span />
        <span />
        <span />
      </div>

      <div className="diagram-cloud">
        {[0, 1, 2, 3, 4].map(index => (
          <span key={index} className={`diagram-node diagram-node--${index + 1}`} />
        ))}
      </div>

      <div className="data-cube data-cube--one" />
      <div className="data-cube data-cube--two" />
    </div>
  )
}
