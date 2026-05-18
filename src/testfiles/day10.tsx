import "../App.css";

function MyFunc() {
  return (
    <>
      <section id="center">
        <div>
          <h3>Day 10 React/TS Learning</h3>
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
                  console.log("The Day 10 React/TS Learning is successful!")
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

export default MyFunc;
