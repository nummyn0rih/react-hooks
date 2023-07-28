import { useEffect, useRef, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

const isInside = ({ x, y }, { left, right, top, bottom }) => {
  if (x >= left && x <= right && y >= top && y <= bottom) {
    return true;
  }

  return false;
};

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const currPosRef = useRef({ x: null, y: null });
  const elCoordsRef = useRef(null);

  useEffect(() => {
    const left = ref.current.offsetLeft;
    const right = left + ref.current.offsetWidth;
    const top = ref.current.offsetTop;
    const bottom = top + ref.current.offsetHeight;

    elCoordsRef.current = { left, right, top, bottom };
  }, []);

  const listener = (e) => {
    currPosRef.current.x = e.clientX;
    currPosRef.current.y = e.clientY;

    if (isInside(currPosRef.current, elCoordsRef.current)) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  };

  useWindowEvent('mousemove', listener);

  return { hovered, ref };
}
