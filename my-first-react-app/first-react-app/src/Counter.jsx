import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const Decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);

    //the above is an example of using an updater function
  };
  const Increment = () => {
    // setCount(count + 1);   Normal
    setCount((c) => c + 1); // using updater
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>{count} </h3>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </>
  );
}
export default Counter;
