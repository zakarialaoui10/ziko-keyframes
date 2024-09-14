import { useKeyframes } from 'ziko-keyframes/react';
import {bounce} from "ziko-keyframes";
const AnimatedComponent = () => {
  const node = useKeyframes(() => bounce(1000, 2, 'ease'));
  return (
    <div
      ref={node}
      style={{ color: 'darkblue', fontSize: '24px' }}
    >
      Hello from React with Animation
    </div>
  );
};

export default AnimatedComponent;
