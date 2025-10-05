const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="image-container">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile.png`} 
            alt="Davi Mota"
            className="rounded-full"
            style={{ maxWidth: '280px', width: '100%', height: 'auto', boxShadow: '0 0 0 8px rgba(255,255,255,0.1)', margin: '0 auto' }}
          />
        </div>
        <div className="text-content">
          <h2 className="gradient-text">About Me</h2>
          <p>
            I am a professional transitioning into the tech industry, specializing in blockchain development, with over 4 years of combined experience in technical support and customer service. I have knowledge in programming with <strong>Solidity, JavaScript, and Python, as well as hands-on experience with tools like Remix IDE, Truffle, and Metamask.</strong>
          </p>
          <div className="social-links" style={{ justifyContent: "center" }}>
            <a href="mailto:kimotsudev@gmail.com" className="social-link gmail">
              <i className="fas fa-envelope"></i> Gmail
            </a>
            <a href="https://www.linkedin.com/in/davimottaa/" className="social-link linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Davemottaa" className="social-link github">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About