import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply keyframes animations to a DOM element.
 *
 * @param {Function} keyframesFunction - Function that returns keyframes and configuration.
 * @param {Array} deps - Dependency array to re-trigger animation if necessary.
 */
const useKeyframes = (keyframesFunction, deps = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      // Get keyframes and config from the provided function
      const { keyframes, config } = keyframesFunction();

      // Apply animation to the DOM element
      elementRef.current.animate(keyframes, config);
    }
  }, [keyframesFunction, ...deps]); // Depend on keyframesFunction and any other dependencies

  return elementRef;
};

export default useKeyframes;
