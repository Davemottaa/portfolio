const Skills = () => {
  const skills = [
    {
      category: "Blockchain",
      icon: "fab fa-ethereum",
      description: "Solidity, Web3.js, Ethereum",
      progress: 100
    },
    
    {
        category: "Frontend",
        icon: "fas fa-code",
        description: "React, Next.js, Tailwind CSS",
        progress: 100

    },
    {
        category: "Backend",
        icon: "fas fa-server",
        description: "Node.js, Express, MongoDB",
        progress: 100
    },

  
  ]

  return (
    <section id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Skills & Technologies
        </h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`${skill.icon} text-4xl mb-4 animate-bounce`}></i>
              <h3 className="font-bold mb-2">{skill.category}</h3>
              <p>{skill.description}</p>
              <div className="skill-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills