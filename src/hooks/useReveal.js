import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation class when taking it into view
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // If it's a DOM element, observe
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return ref;
}

export function useRevealList() {
    const refs = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              } else {
                entry.target.classList.remove('active');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const elements = refs.current;
        elements.forEach(el => {
            if (el) observer.observe(el);
        });
    
        return () => {
          elements.forEach(el => {
              if (el) observer.unobserve(el);
          });
        };
      }, []);
    
      return refs;
}
