import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      {mounted && <Background3D />}
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>© Created ❤️ by Le Minh Triet @ 2026</p>
      </footer>
    </div>
  );
}

export default App;
