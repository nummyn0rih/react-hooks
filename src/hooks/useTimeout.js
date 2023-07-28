import { useRef, useEffect, useCallback } from 'react';

export function useTimeout(cb, delay) {
  const cbRef = useRef(cb);
  const timeoutRef = useRef();

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => cbRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    set();

    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return {
    set,
    clear,
    reset,
  };
}
