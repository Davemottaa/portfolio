import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Donate from './components/Donate'
import './assets/styles/main.css'
import Faucet from './components/Faucet'
import NeonParticlesBackground from './components/NeonParticlesBackground'

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <NeonParticlesBackground />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Donate />
        <Faucet />
      </main>
    </div>
  )
}

export default App