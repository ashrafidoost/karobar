import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Day29 } from "./testfiles/day29";
import Mylrn01 from "./testfiles/LRN_Book/mylrn01";
import Welcome from "./testfiles/LRN_Book/mylrn02";
import MyLrn03 from "./testfiles/LRN_Book/mylrn03";
import Mylrn03 from "./testfiles/LRN_Book/mylrn03";

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

      <section id="mylrn" className="secFrame">
        <Welcome name="Reza" />
        <Mylrn03 />
      </section>

      <section id="mylrn" className="secFrame">
        <Welcome name="Reza" />
        <Mylrn01 />
      </section>

      <section id="myDay25" className="secFrame">
        <Day29 />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
