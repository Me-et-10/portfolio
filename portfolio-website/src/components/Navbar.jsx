import './Navbar.css';
import { smoothScroll } from '../main';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about" onClick={() => smoothScroll('#about')}>About</a></li>
        <li><a href="#projects" onClick={() => smoothScroll('#projects')}>Projects</a></li>
        <li><a href="#skills" onClick={() => smoothScroll('#skills')}>Skills</a></li>
        <li><a href="#experience" onClick={() => smoothScroll('#experience')}>Experience</a></li>
        <li><a href="#contact" onClick={() => smoothScroll('#contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
