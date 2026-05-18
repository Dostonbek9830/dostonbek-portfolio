import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navItems = ['About', 'Projects', 'Experience', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <a className="navbar__logo" href="#hero" onClick={() => setMenuOpen(false)}>DY.</a>

      <button
        className="navbar__toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="primary-navigation" className="navbar__links">
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
