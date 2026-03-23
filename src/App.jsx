import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavDots from './components/NavDots';

function App() {
  return (
    <div className="selection:bg-[var(--brass)] selection:text-[var(--espresso)] antialiased bg-[var(--espresso)] text-[var(--cream)] font-epilogue min-h-screen">
      <Navbar />
      <NavDots />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
