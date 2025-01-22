import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-entry">
        <h3>Network Engineer, Parth Group Tuition</h3>
        <p>Designed, implemented, and maintained network infrastructure for the company. Conducted risk assessments and developed contingency plans to ensure network reliability.</p>
      </div>
      <div className="experience-entry">
        <h3>VoIP Intern, Vindaloo Softtech Pvt Ltd</h3>
        <p>Assisted in deploying and configuring VoIP systems for clients. Conducted testing and troubleshooting of VoIP networks and equipment.</p>
      </div>
      {/* Add more experience entries as needed */}
    </section>
  );
}

export default Experience;
