import React, { useEffect } from 'react';
import Menu from './Menu';
import About from './About';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';
import './App.css';

const App: React.FC = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div className="App">
      <Menu />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
