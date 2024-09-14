import { useEffect, useRef } from 'preact/hooks';
// import React from 'preact/compat';
const useKeyframes = (keyframesFunction) => {
  const node = useRef(null);
  useEffect(() => {
    if (!node.current) return;
    const { keyframes, config } = keyframesFunction();
    const animation = node.current.animate(keyframes, config);
    return () => {
      animation.cancel();
    };
  }, [keyframesFunction]);
  return node;
};
export{
    useKeyframes
}