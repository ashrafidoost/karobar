import { useEffect, useState, type ChangeEvent } from "react";
import "../App.css";

function NameInput() {
  const [name, setName] = useState("");

  function handleTyping(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  useEffect(() => {
    console.log("I will only run ONCE when the component first loads.");
    document.title = "Welcome " + name;
  }, [name]);

  return (
    <div>
      <h3>Set Name</h3>
      <input type="text" onChange={handleTyping} value={name} />
      <p>Your name is: {name}</p>
    </div>
  );
}

function DayFifteen() {
  return (
    <>
      <section id="center">
        <div>
          <h3>Day 17 React/TS Learning</h3>
          <div id="root">
            <div>
              <NameInput />
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
