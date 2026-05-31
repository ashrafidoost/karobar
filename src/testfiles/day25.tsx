import React, { useState, useMemo } from "react";

export function Day25() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(10);

  const slowResult = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Slow Result: {slowResult}</p>
    </div>
  );
}
