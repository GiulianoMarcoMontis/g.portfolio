// components
import Navigation from './components/Navigation';

// views
import Hero from './views/Hero';
import About from './views/About';
import Projects from './views/Projects';
import Design from './views/Hero';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Design />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
