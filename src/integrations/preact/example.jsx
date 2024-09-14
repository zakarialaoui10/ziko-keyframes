import { useKeyframes } from 'ziko-keyframes/preact';
import {bounce} from "ziko-keyframes";
const getBounceAnimation = () => bounce(3000, Infinity, 'ease');
export function App() {
  const [count, setCount] = useState(0);
  const node = useKeyframes(getBounceAnimation);
  return (
    <div
      ref={node}
      style={{ color: 'darkblue', fontSize: '24px' }}
    >
      Hello from Preact with Animation
    </div>
  );
}
