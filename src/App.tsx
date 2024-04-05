import React from 'react';
import Menu from './Menu';
import About from './About';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';
import './App.css';

const App: React.FC = () => {
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
