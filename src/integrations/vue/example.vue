<template>
    <div ref="animatedElement" style="color: darkblue; font-size: 24px">
      Hello from Vue.js with Animation
    </div>
  </template>
<script setup>
  import { useKeyframes } from 'ziko-keyframes/vue';
  import { bounce } from 'ziko-keyframes';
  const getBounceAnimation = () => bounce(1000, 2, 'ease');
  const animatedElement = useKeyframes(getBounceAnimation);
</script>
  