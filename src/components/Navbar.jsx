import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1614]/80 backdrop-blur-xl border-b border-[var(--brass)]/10">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold tracking-[0.15em] text-[var(--cream)] uppercase font-epilogue hidden sm:block">Siddharth Sharma</div>
        <div className="hidden md:flex items-center gap-10 font-epilogue tracking-[0.1em] uppercase text-xs font-medium">
          <a className="text-[var(--brass)]/60 hover:text-[var(--cream)] transition-colors duration-300" href="#skills">Toolkit</a>
          <a className="text-[var(--brass)]/60 hover:text-[var(--cream)] transition-colors duration-300" href="#projects">Work</a>
          <a className="text-[var(--brass)]/60 hover:text-[var(--cream)] transition-colors duration-300" href="#education">Academic</a>
          <a className="text-[var(--brass)]/60 hover:text-[var(--cream)] transition-colors duration-300" href="#contact">Contact</a>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center border border-[var(--brass)]/20 hover:bg-[var(--brass)] hover:text-[var(--espresso)] transition-all duration-300 text-[var(--brass)] rounded-full"
            title={isDark ? "Switch to Light Theme" : "Switch to Noir Theme"}
          >
            <span className="material-symbols-outlined text-sm">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
        <button className="md:hidden text-[var(--cream)]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
