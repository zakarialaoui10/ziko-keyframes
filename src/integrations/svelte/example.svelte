<script>
	let name = 'world';
	function useKeyframes(node, keyframesFunction) {
  const { keyframes, config } = keyframesFunction();

  const animation = node.animate(keyframes, config);

  return {
    destroy() {
      animation.cancel();
    }
  };
}
	function bounce(duration, iterations, easing) {
  return {
    keyframes: [
      { opacity: 0, transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
      { opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
      { transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
      { transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
      { transform: 'translate3d(0, 0, 0)' }
    ],
    config: {
      duration,
      iterations,
      easing
    }
  };
}
	const getBounceAnimation = () => bounce(1000, 2, 'ease');
</script>

<div use:useKeyframes={getBounceAnimation} style="color: darkblue; font-size: 24px;">
  Hello from Svelte with Animation
</div>
