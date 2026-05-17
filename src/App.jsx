import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
 
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer style={{
        textAlign: 'center', padding: '2rem',
        borderTop: '1px solid rgba(55,138,221,0.08)',
        fontSize: '0.8rem', color: 'rgba(232,240,248,0.2)',
        position: 'relative', zIndex: 1
      }}>
        © 2026 Dostonbek Yokubov · dostonbek.works
      </footer>
    </>
  )
}
 
