import { useEffect } from 'react';

/**
 * Observa todos los elementos con la clase .reveal dentro del contenedor
 * y les agrega .in cuando entran en el viewport (una sola vez).
 * Se re-ejecuta cada vez que cambian las deps (por si el contenido es dinámico).
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
