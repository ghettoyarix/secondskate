import { useRef, useEffect } from 'react';

/**
 * Hook that executes a function on each update after the first render.
 *
 * @param fn - Function to be executed on each update after the first render.
 * @param inputs - Array of inputs that determine when the effect should be re-run.
 */
function useUpdateEffect(fn: () => void, inputs: any[]) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
}
export default useUpdateEffect;
