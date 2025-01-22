import { useEffect } from 'react';
import './Header.css';
import { smoothScroll } from '../main';
import resume from '../assets/OPS resume.pdf';
function Header() {
  useEffect(() => {
    console.log('Header component mounted');
    const headerElement = document.querySelector('.hero');
    if (headerElement) {
      console.log('Header element found:', headerElement);
      console.log('Current classes:', headerElement.classList);
    }
  }, []);

  return (
    <header className="hero section">
      <div className="header-content animate-on-scroll">
        <h1 onClick={() => smoothScroll('#top')}>
          Meet Patankar
        </h1>
        <p>Aspiring Computer Scientist | Passionate Problem-Solver</p>
        <a href={resume} download="Meet_Patankar_Resume.pdf">Download Resume</a> {/* Resume link */}
      </div>
    </header>
  );
}

export default Header;