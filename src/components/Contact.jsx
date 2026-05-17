const links = [
  { label: 'Send an Email →', href: 'mailto:dostonbek.yoqubov9830@gmail.com', primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dostonbek-yoqubov/', primary: false },
  { label: 'Telegram', href: 'https://t.me/d_yokubov', primary: false },
  { label: '+998 90 051 29 91', href: 'tel:+998900512991', primary: false },
]

export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '6rem 4rem' }}>
        <p className="section-label">Contact</p>
        <h2 className="section-heading">Let's connect</h2>
        <p style={{
          color: 'rgba(232,240,248,0.55)', marginBottom: '2.5rem',
          fontSize: '1rem', fontWeight: 300
        }}>
          Open to data analyst roles, freelance projects, and collaborations.
          Feel free to reach out.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={link.primary ? 'btn-primary' : 'btn-outline'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}