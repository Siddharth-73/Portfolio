import { useEffect, useState } from 'react';

export default function NavDots() {
  const [active, setActive] = useState('hero');
  const sections = ['hero', 'skills', 'projects', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActive = active;
      
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const offsetTop = element.offsetTop - 300;
          if (pageYOffset >= offsetTop) {
            newActive = sec;
          }
        }
      });
      setActive(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((sec) => (
        <a 
          key={sec} 
          href={`#${sec}`} 
          className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === sec ? 'bg-[var(--cream)] scale-150' : 'bg-[var(--brass)] opacity-40 hover:opacity-100 hover:bg-[var(--cream)]'}`}
          aria-label={`Scroll to ${sec}`}
        />
      ))}
    </div>
  );
}
