const Projects = () => {
  const projects = [
    {
      title: "Web3 Wallet",
      description: "I’m creating a decentralized wallet that gives users full control over their cryptocurrencies. The platform allows users to securely store, send, and receive digital assets with blockchain integration, maintaining privacy and security. It’s a simple, safe, and autonomous wallet for those who want full control over their funds.",
      image: "/images/wallet.jpg"
    },
    {
      title: "Social Media Web3",
      description: "I am building a decentralized social network that gives users full control over their data and content. Using blockchain to transparently record interactions and IPFS to securely store posts, the platform enables wallet-based login, direct rewards through tokens, and community-driven governance via a DAO. The focus is on ensuring privacy, transparency, and autonomy for all users",
      image: "/images/social.png"
    },
    {
      title: "Web3 Game",
      description: "I’m developing a Play-to-Earn game where players earn tokens through gameplay. By utilizing blockchain, I track in-game achievements and rewards, allowing players to trade, upgrade, and monetize their digital assets. It’s a fun, decentralized, and rewarding gaming experience.",
      image: "/images/game.jpeg"
    }
  ]

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects