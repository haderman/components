import React, { useRef, useEffect } from 'react';

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export default function useInterval(callback: Function, delay: number): void {
  const savedCallback = useRef<Function | undefined>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback?.current?.();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
