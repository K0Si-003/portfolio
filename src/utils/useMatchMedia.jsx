import { useState, useEffect } from 'react';

export default function useMatchMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    // Ajouter un écouteur pour les changements
    mediaQueryList.addEventListener('change', listener);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}