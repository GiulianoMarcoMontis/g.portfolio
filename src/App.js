import { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// components
import Navigation from './components/Navigation';

// views
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Design from './views/Design';
import Contacts from './views/Contacts';

// import NotFound from './views/NotFound';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
      <main className="l-main">
        <Home />
        <About />
        <Projects />
        <Design />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
