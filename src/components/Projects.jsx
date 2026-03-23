import { useRevealList } from '../hooks/useReveal';
import toolkitBg from '../assets/Projects.png';

export default function Projects() {
  const revealRefs = useRevealList();

  const projects = [
    {
      id: "CN",
      title: "Centrion - AI Powered Task Manager",
      role: "AI Task Platform",
      desc: "Architected a full-stack project management suite with interactive Kanban boards, dynamic task workflows, and live workspace synchronization via Socket.io. Integrated AI for automated task extraction.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/Siddharth-73/Centrion-AI-Powered-Task-Manager"
    },
    {
      id: "DS",
      title: "DISMAT - Disaster Material Tracking System",
      role: "Disaster Tracking",
      desc: "Designed a disaster-relief supply lifecycle tracking system featuring real-time map visualizations, role-based access control, and automated updates.",
      tech: ["React (Vite)", "Node.js", "MongoDB Atlas", "Leaflet"],
      link: "https://github.com/Siddharth-73/DISMAT--Disaster-Material-Tracking-System"
    },
    {
      id: "DO",
      title: "DocOn - Doctor Appointment Booking WebApp",
      role: "Appointment WebApp",
      desc: "Developed a Doctor Appointment booking application enabling online consultation via chat and video, with role-based auth and digital prescriptions.",
      tech: ["React.js", "Firebase", "HTML5"],
      link: "https://github.com/Siddharth-73/Practo_Doctor"
    }
  ];

  return (
    <section className="relative py-40 px-8 bg-[var(--espresso)] overflow-hidden" id="projects">
      <div className="absolute inset-0 z-0">
        <img alt="Projects Background" className="w-full h-full object-cover opacity-[0.15] grayscale sepia-filter" src={toolkitBg} />
        <div className="absolute inset-0 bg-[var(--espresso)]/85"></div>
      </div>
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div 
          ref={el => revealRefs.current[0] = el}
          className="flex flex-col md:flex-row justify-between items-end gap-10 reveal"
        >
          <div className="space-y-6">
            <h2 className="font-headline text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--cream)] opacity-50">Selected Works</h2>
            <p className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-[var(--cream)]">Curated Projects</p>
          </div>
          <p className="text-[var(--brass)]/70 max-w-sm text-lg font-light leading-relaxed border-l border-[var(--brass)]/20 pl-8">
            A collection of robust platforms handling high precision, real-time data, and intelligent architectures.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((proj, index) => (
            <div 
              key={index}
              ref={el => revealRefs.current[index + 1] = el}
              className="group relative bg-[var(--surface)] border border-[var(--brass)]/10 p-10 hover:border-[var(--brass)]/40 transition-all duration-500 reveal"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-[var(--espresso)] flex items-center justify-center border border-[var(--brass)]/20 shrink-0">
                  <span className="text-[var(--brass)] font-bold tracking-tighter text-lg">{proj.id}</span>
                </div>
                
                <div className="flex-grow space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline text-3xl font-bold text-[var(--cream)] tracking-tight">{proj.title}</h3>
                    <div className="flex gap-4 text-[var(--brass)]/50">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="hover:text-[var(--brass)] transition-colors">
                        <span className="material-symbols-outlined text-2xl">open_in_new</span>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-[var(--brass)]/70 text-lg font-light leading-relaxed max-w-2xl">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-[var(--espresso)] border border-[var(--brass)]/10 text-[9px] font-bold tracking-widest text-[var(--brass)]/60 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
