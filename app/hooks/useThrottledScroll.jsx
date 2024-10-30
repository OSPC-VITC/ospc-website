import { useState, useEffect } from 'react';

export function useThrottledScroll(delay = 16) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    let timeoutId = null;
    let previousTime = 0;
    
    function handleScroll() {
      const now = Date.now();
      
      if (now - previousTime >= delay) {
        previousTime = now;
        setScrollY(window.scrollY);
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          previousTime = now;
          setScrollY(window.scrollY);
        }, delay);
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);
  
  return scrollY;
}