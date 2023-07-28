import { useState, useEffect } from 'react';
import { useWindowEvent } from './useWindowEvent';
// import { useDebounce } from './useDebounce';

export function useViewportSize() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const setSizes = () => {
    setWidth(document.body.clientWidth);
    setHeight(document.body.clientHeight);
  };

  useEffect(setSizes, []);

  useWindowEvent('resize', setSizes);

  // useDebounce(setSizes, 1000, [width, height]);

  return { width, height };
}
