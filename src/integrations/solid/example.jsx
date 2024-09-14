import { useKeyframes } from 'ziko-keyframes/solid';
import {bounce} from "ziko-keyframes";
const getBounceAnimation = () => bounce(1000, 2, 'ease');
const AnimatedComponent = () => {
  const setRef = useKeyframes(getBounceAnimation);
  return (
    <div
      ref={setRef}
      style={{ color: 'darkblue', fontSize: '24px' }}
    >
      Hello from Solid.js with Animation
    </div>
  );
};

export default AnimatedComponent;
