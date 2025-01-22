import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title animate-on-scroll">Projects</h2>
      <div className="projects-grid">
        <div className="project-card animate-on-scroll">
          <h3>Online Retail Store Database</h3>
          <p>Designed and implemented a comprehensive database schema for an online retail store, managing products, customers, orders, and inventory. Utilized MySQL for efficient data storage and retrieval.</p>
          <a href="https://github.com/m-e-e-t/online-retail-store-db" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}

export default Projects;