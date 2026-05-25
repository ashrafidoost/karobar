import { useState } from "react";
import "../App.css";

function Counter() {
  // const[currentValue, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1); // Update 'count' and trgiggers a re-render
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

function DayFifteen() {
  return (
    <>
      <section id="center">
        <div>
          <h3>Day 15 React/TS Learning</h3>
          <div id="root">
            <div>
              <Counter />
            </div>
          </div>
          <div>
            <p>© 2024 React/TS Learning. All rights reserved.</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default DayFifteen;
