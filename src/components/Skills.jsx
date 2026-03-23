import { useReveal } from '../hooks/useReveal';
import toolkitBg from '../assets/Toolkit.jpeg';

export default function Skills() {
  const revealRef = useReveal();

  const skills = [
    "C++", "JavaScript", "Python", "Java",
    "React.js", "Node.js", "Express.js", "Tailwind CSS",
    "MongoDB", "MySQL", "Firebase"
  ];

  return (
    <section className="relative py-40 px-8 bg-[var(--espresso)] overflow-hidden" id="skills">
      <div className="absolute inset-0 z-0">
        <img alt="Toolkit Background" className="w-full h-full object-cover opacity-20 grayscale sepia-filter" src={toolkitBg} />
        <div className="absolute inset-0 bg-[var(--espresso)]/60"></div>
      </div>
      
      <div 
        ref={revealRef}
        className="max-w-7xl mx-auto relative z-10 text-center space-y-24 reveal pb-32"
      >
        <div className="space-y-6">
          <h2 className="font-headline text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--cream)] opacity-50">Technical Expertise</h2>
          <p className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-[var(--cream)]">The Toolkit</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-10 py-4 glass-pill text-[var(--cream)] font-medium text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-500 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
