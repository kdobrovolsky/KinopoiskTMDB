import { useEffect } from 'react';

export const useScrollToTopOnChange = (deps: unknown[]) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, deps);
};
