const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-6">
        <div className="md">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile.png`} 
            alt="Davi Mota"
            className="rounded-full w-64 h-64 object-cover shadow-xl mx-auto" 
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a professional transitioning into the tech industry, specializing in blockchain development, with over 4 years of combined experience in technical support and customer service. I have knowledge in programming with <strong>Solidity, JavaScript, and Python, as well as hands-on experience with tools like Remix IDE, Truffle, and Metamask.
              </strong>
            </p>
            
            <div className="flex gap-4" style={{ justifyContent: "center" }}>
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
      </div>
    </section>
  )
}

export default About