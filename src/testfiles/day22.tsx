import React, { useState, createContext, useContext, useRef } from "react";

const ThemeContext = createContext();

export function Day22() {
  return (
    <ThemeContext.Provider value="dark (passed through context)">
      <Header />
      <FocusInput />
      <SilnetCounter />
      <hr />
    </ThemeContext.Provider>
  );
}

function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <header>
      <h2 style={{ color: "orange" }}>The current theme is {themeContext}</h2>
    </header>
  );
}

function SilnetCounter() {
  const [renders, setRenders] = useState(0);
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current += 1;
    console.log(`Button clicked ${clickCount.current} times`);
  }

  return (
    <div>
      <button onClick={handleClick}>
        -- useRef -- Click me (Chceck console) - {clickCount.current}
      </button>
      <button onClick={() => setRenders(renders + 1)}>
        -- useState --Force Re-render - {renders}
      </button>
    </div>
  );
}

function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}
