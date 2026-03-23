import { useReveal } from '../hooks/useReveal';
import contactBg from '../assets/Contact.JPG';

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section className="py-40 px-8 bg-[var(--espresso)] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <img alt="Contact Background" className="w-full h-full object-cover opacity-20 grayscale sepia-filter" src={contactBg} />
        <div className="absolute inset-0 bg-[var(--espresso)]/85"></div>
      </div>
      
      <div 
        ref={revealRef}
        className="max-w-7xl mx-auto relative z-10 reveal"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-12">
            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-[var(--cream)] uppercase">
              LET'S BUILD<br/><span className="text-gradient">SOMETHING</span> NEW.
            </h2>
            <p className="text-[var(--brass)]/70 text-2xl leading-relaxed max-w-md font-light">
              Available for curated collaborations. Drop a message to start the dialogue.
            </p>
            
            <div className="flex gap-4">
              <a href="mailto:sharmasiddharth7373@gmail.com" className="w-14 h-14 border border-[var(--brass)]/20 flex items-center justify-center hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-500 text-[var(--brass)]">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a href="https://github.com/Siddharth-73" target="_blank" rel="noreferrer" className="w-14 h-14 border border-[var(--brass)]/20 flex items-center justify-center hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-500 text-[var(--brass)]">
                <span className="material-symbols-outlined text-xl">code</span>
              </a>
              <a href="https://www.linkedin.com/in/siddharth-sharma-ba693a294/" target="_blank" rel="noreferrer" className="w-14 h-14 border border-[var(--brass)]/20 flex items-center justify-center hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-500 text-[var(--brass)]">
                <span className="font-bold text-sm">IN</span>
              </a>
              <a href="https://x.com/N3RO_73" target="_blank" rel="noreferrer" className="w-14 h-14 border border-[var(--brass)]/20 flex items-center justify-center hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-500 text-[var(--brass)]">
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>
          
          <form className="bg-[var(--surface)]/40 p-12 border border-[var(--brass)]/10 space-y-12 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-12">
              <div className="space-y-4 border-b border-[var(--brass)]/20 pb-6 focus-within:border-[var(--brass)] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--cream)] opacity-50">Full Name</label>
                <input id="nameStr" className="w-full bg-transparent border-0 focus:ring-0 text-[var(--cream)] placeholder-[var(--brass)]/20 p-0 text-2xl font-light outline-none" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-4 border-b border-[var(--brass)]/20 pb-6 focus-within:border-[var(--brass)] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--cream)] opacity-50">Email Address</label>
                <input id="emailStr" className="w-full bg-transparent border-0 focus:ring-0 text-[var(--cream)] placeholder-[var(--brass)]/20 p-0 text-2xl font-light outline-none" placeholder="hello@world.com" type="email" />
              </div>
              <div className="space-y-4 border-b border-[var(--brass)]/20 pb-6 focus-within:border-[var(--brass)] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--cream)] opacity-50">Project Brief</label>
                <textarea id="briefStr" className="w-full bg-transparent border-0 focus:ring-0 text-[var(--cream)] placeholder-[var(--brass)]/20 p-0 text-2xl font-light outline-none resize-none" placeholder="How can I help you?" rows="3"></textarea>
              </div>
            </div>
            <button className="w-full py-6 bg-[var(--brass)] text-[var(--espresso)] font-black uppercase text-[10px] tracking-[0.5em] hover:bg-[var(--cream)] transition-all duration-500" type="submit" onClick={(e) => {
              e.preventDefault();
              const name = document.getElementById('nameStr').value;
              const email = document.getElementById('emailStr').value;
              const brief = document.getElementById('briefStr').value;
              window.location.href = `mailto:sharmasiddharth7373@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(brief + '\n\nFrom: ' + email)}`;
            }}>
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
