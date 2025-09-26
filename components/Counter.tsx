import { useRecoilState } from "recoil";
import { counterState } from "@/state/counterAtom";

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
