import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.25rem 4rem',
      background: scrolled ? 'rgba(5,15,28,0.95)' : 'rgba(5,15,28,0.7)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(55,138,221,0.12)',
      transition: 'background 0.3s'
    }}>
      <a href="#hero" style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem',
        color: '#378ADD', textDecoration: 'none', letterSpacing: '0.02em'
      }}>DY.</a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['About', 'Projects', 'Experience', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              fontSize: '0.875rem',
              color: 'rgba(232,240,248,0.65)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              fontWeight: 400,
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#378ADD'}
            onMouseLeave={e => e.target.style.color = 'rgba(232,240,248,0.65)'}
            >{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}