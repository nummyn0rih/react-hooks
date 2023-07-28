import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

export function useDebounce(cb, delay, deps) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffect(reset, [...deps, reset]);
  useEffect(clear, []);
}
