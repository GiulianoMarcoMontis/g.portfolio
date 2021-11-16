import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// components
import Navigation from './components/Navigation';

// views
import Home from './views/Home';

import About from './views/About';
import Qualifications from './views/Qualifications';
import TechStack from './views/TechStack';
import Skills from './views/Skills';
import Projects from './views/Projects';
// import Design from './views/Design';
import Contacts from './views/Contacts';
import Footer from './views/Footer';
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
        <Qualifications />
        <Skills />
        <TechStack />
        <Projects />
        {/* <Design /> */}
        <Contacts />
        <Footer />
      </main>
    </div>
  );
};

export default App;
