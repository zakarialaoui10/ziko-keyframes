import { ref, onMounted, onBeforeUnmount } from 'vue';
const useKeyframes = (keyframesFunction) => {
  const node = ref(null);
  onMounted(() => {
    if (!node.value) return;
    const { keyframes, config } = keyframesFunction();
    const animation = node.value.animate(keyframes, config);
    onBeforeUnmount(() => {
      animation.cancel();
    });
  });
  return node;
};
export{
    useKeyframes
}