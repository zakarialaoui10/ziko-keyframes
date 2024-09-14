function useKeyframes(node, keyframes, config) {
    const animation = node.animate(keyframes, config);
    return {
      destroy() {
        animation.cancel();
      }
    };
}