import { useEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo = ({ x = 0, y = 0 }) => {
    window.scrollTo({ top: x, left: y, behavior: 'smooth' });
  };

  const set = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    setScroll({ x, y });
  };

  useEffect(() => {
    set();
  }, []);

  useWindowEvent('scroll', set);

  return [scroll, scrollTo];
}
