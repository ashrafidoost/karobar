import { useEffect, useState } from "react";

export default function DayTwentySeven() {
  const [value, setValue] = useState("");

  useEffect(() => {
    document.title = "Day 27";
  }, []);

  return (
    <div>
      <h1>Day 27 Component</h1>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Current value: {value}</p>
    </div>
  );
}
