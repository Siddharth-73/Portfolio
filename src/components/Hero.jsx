import { useReveal } from '../hooks/useReveal';
import heroBg from '../assets/Profiel_section.jpeg';
import profileImg from '../assets/Pfp.jpeg';
import cvFile from '../assets/CV/CV General Updated.pdf';

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--espresso)]" id="hero">
      <div className="absolute inset-0 z-0">
        <img alt="Hero Background" className="w-full h-full object-cover opacity-40 grayscale sepia-filter" src={heroBg} />
        <div className="absolute inset-0 bg-[var(--espresso)]/70"></div>
      </div>
      
      <div 
        ref={revealRef} 
        className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal pt-32 pb-32"
      >
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-4 py-1 border border-[var(--brass)]/30">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[var(--brass)]">Based in India</span>
          </div>
          
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-[var(--cream)]">
            CRAFTING <br/><span className="text-gradient">DIGITAL</span><br/>POETRY.
          </h1>
          
          <p className="text-[var(--brass)]/70 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
            I specialize in building responsive, user-friendly websites using modern web technologies. I'm passionate about bringing creative ideas to life through code and design.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center pt-4">
            <a className="px-12 py-5 bg-[var(--brass)] text-[var(--espresso)] font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[var(--cream)] transition-all duration-300" href="#contact">
              Start Inquiry
            </a>
            <a className="px-12 py-5 border border-[var(--brass)]/30 text-[var(--cream)] font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[var(--brass)]/10 transition-all duration-300" href={cvFile} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden grayscale sepia-filter border border-[var(--brass)]/20 group">
            <img alt="Hero Profile" className="w-full h-full object-cover brightness-100 transition-all duration-1000" src={profileImg} />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
