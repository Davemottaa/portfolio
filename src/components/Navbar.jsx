const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">DM</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="toggle-dark-mode-navbar" onClick={toggleDarkMode}>
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar