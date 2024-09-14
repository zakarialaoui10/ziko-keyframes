import { createEffect } from 'solid-js';
const useKeyframes = (keyframesFunction) => {
  let node;
  createEffect(() => {
    if (!node) return;
    const { keyframes, config } = keyframesFunction();
    const animation = node.animate(keyframes, config);
    return () => {
      animation.cancel();
    };
  });
  return (el) => {
    node = el;
  };
};
export{
    useKeyframes
}
