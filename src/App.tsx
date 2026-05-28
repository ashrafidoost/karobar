import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import MyFunc from "./testfiles/day10";
import MyDay1400 from "./testfiles/day14";
import MyDay15 from "./testfiles/day15";
import MyDay17 from "./testfiles/day17";
import { UserDirectory, UserCard } from "./testfiles/day20";
import { Day22 } from "./testfiles/day22";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section id="myDay22">
        <Day22 />
      </section>

      <section id="myDay20">
        <UserDirectory />
      </section>

      <section id="myDay17">
        <MyDay17 />
      </section>

      <section id="myDay15">
        <MyDay15 />
      </section>

      <section id="myDay14">
        <MyDay1400 />
      </section>

      <section id="myFuncSection">
        <MyFunc />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
