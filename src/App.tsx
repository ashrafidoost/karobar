import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function checkString(str: string): string {
  interface storeStaff {
    id: number;
    fname: string;
    lname: string;
    age: number;
    role?: string; // Optional property
  }

  const staff1: storeStaff = {
    id: 1,
    fname: "Reza",
    lname: "Ash",
    age: 40,
  };

  const staff2: storeStaff = {
    id: 2,
    fname: "Laila",
    lname: "Khan",
  };

  type myStaff = {
    id: number;
    fname: string;
    lname: string;
  };

  if (str === null) {
    return "Input element not found.";
  } else {
    return `the output is:  ${str.toUpperCase()}`;
  }
}

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

        <div>
          <h3>Day 4 React/TS Learning</h3>
          <div id="root">
            <div>
              <h2>Welcome to React and TypeScript Learning</h2>
              <p>
                This is a simple HTML file to test our React and TypeScript
                setup.
              </p>
              <input
                type="text"
                id="inputString"
                placeholder="Enter a string..."
              />
              <button
                onClick={() =>
                  console.log(
                    checkString(document.getElementById("inputString").value),
                  )
                }
              >
                Check String
              </button>
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

export default App;
