import { useRevealList } from '../hooks/useReveal';
import eduBg from '../assets/Academics-Certifications.png';
import compTheoryCert from '../assets/Certificates/Computational Theory.pdf';
import dsaCert from '../assets/Certificates/DSA in C++.pdf';
import dataAnalysisCert from '../assets/Certificates/Data Analysis With Python.pdf';

export default function Education() {
  const revealRefs = useRevealList();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 relative" id="education">
      <div className="absolute inset-0 z-0">
        <img alt="Education Background" className="w-full h-full object-cover opacity-15 grayscale sepia-filter" src={eduBg} />
        <div className="absolute inset-0 bg-[var(--espresso)]/85"></div>
      </div>
      
      <div 
        ref={el => revealRefs.current[0] = el}
        className="relative py-40 px-12 overflow-hidden flex flex-col justify-center border-r border-[var(--brass)]/5 reveal z-10"
      >
        <div className="space-y-20">
          <div className="space-y-6">
            <h2 className="font-headline text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--cream)] opacity-50">Foundation</h2>
            <p className="font-headline text-6xl font-black tracking-tighter text-[var(--cream)]">Academic Journey</p>
          </div>
          
          <div className="space-y-16">
            <div className="pl-8 border-l border-[var(--brass)]/30 space-y-4">
              <span className="text-[10px] text-[var(--cream)] opacity-50 font-bold tracking-widest uppercase">Aug 2023 — Present</span>
              <h4 className="text-3xl font-bold text-[var(--cream)]">B.Tech Computer Science</h4>
              <p className="text-[var(--brass)]/70 font-light text-lg">Lovely Professional University, Punjab</p>
            </div>
            
            <div className="pl-8 border-l border-[var(--brass)]/10 space-y-4">
              <span className="text-[10px] text-[var(--cream)] opacity-50 font-bold tracking-widest uppercase">Apr 2020 — Mar 2021</span>
              <h4 className="text-3xl font-bold text-[var(--cream)]">Intermediate (94.3%)</h4>
              <p className="text-[var(--brass)]/70 font-light text-lg">Radha Madhav Public School, Bareilly</p>
            </div>
            
            <div className="pl-8 border-l border-[var(--brass)]/10 space-y-4">
              <span className="text-[10px] text-[var(--cream)] opacity-50 font-bold tracking-widest uppercase">Apr 2018 — Mar 2019</span>
              <h4 className="text-3xl font-bold text-[var(--cream)]">High School (91.4%)</h4>
              <p className="text-[var(--brass)]/70 font-light text-lg">Radha Madhav Public School, Bareilly</p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        ref={el => revealRefs.current[1] = el}
        className="relative py-40 px-12 overflow-hidden flex flex-col justify-center reveal z-10"
      >
        <div className="space-y-20">
          <div className="space-y-6">
            <h2 className="font-headline text-[10px] font-bold tracking-[0.5em] uppercase text-[var(--cream)] opacity-50">Accolades</h2>
            <p className="font-headline text-6xl font-black tracking-tighter text-[var(--cream)]">Certifications</p>
          </div>
          
          <div className="space-y-4">
            <div className="block p-8 border border-[var(--brass)]/10 bg-[var(--espresso)]/40 hover:bg-[var(--brass)]/5 transition-all duration-500 group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[var(--brass)] text-3xl font-extralight">verified</span>
                  <div>
                    <h4 className="font-bold text-xl text-[var(--cream)]">Computational Theory</h4>
                    <p className="text-[9px] text-[var(--cream)] opacity-50 font-bold uppercase tracking-[0.2em] mt-1">GeeksforGeeks • Aug 2025</p>
                  </div>
                </div>
                <a href={compTheoryCert} target="_blank" rel="noreferrer" className="text-[var(--brass)]/30 group-hover:text-[var(--brass)] transition-colors">
                  <span className="material-symbols-outlined text-2xl">open_in_new</span>
                </a>
              </div>
            </div>
            
            <div className="block p-8 border border-[var(--brass)]/10 bg-[var(--espresso)]/40 hover:bg-[var(--brass)]/5 transition-all duration-500 group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[var(--brass)] text-3xl font-extralight">verified</span>
                  <div>
                    <h4 className="font-bold text-xl text-[var(--cream)]">DSA in C++</h4>
                    <p className="text-[9px] text-[var(--cream)] opacity-50 font-bold uppercase tracking-[0.2em] mt-1">CipherSchools • Jul 2025</p>
                  </div>
                </div>
                <a href={dsaCert} target="_blank" rel="noreferrer" className="text-[var(--brass)]/30 group-hover:text-[var(--brass)] transition-colors">
                  <span className="material-symbols-outlined text-2xl">open_in_new</span>
                </a>
              </div>
            </div>
            
            <div className="block p-8 border border-[var(--brass)]/10 bg-[var(--espresso)]/40 hover:bg-[var(--brass)]/5 transition-all duration-500 group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[var(--brass)] text-3xl font-extralight">verified</span>
                  <div>
                    <h4 className="font-bold text-xl text-[var(--cream)]">Data Analysis with Python</h4>
                    <p className="text-[9px] text-[var(--cream)] opacity-50 font-bold uppercase tracking-[0.2em] mt-1">IBM • Feb 2024</p>
                  </div>
                </div>
                <a href={dataAnalysisCert} target="_blank" rel="noreferrer" className="text-[var(--brass)]/30 group-hover:text-[var(--brass)] transition-colors">
                  <span className="material-symbols-outlined text-2xl">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
