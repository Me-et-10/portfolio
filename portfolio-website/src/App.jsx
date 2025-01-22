import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css'; // Import App.css for global styles

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;