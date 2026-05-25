import "../App.css";

function UserCard({ username, age }) {
  return (
    <div>
      <h3>
        Username: {username} - Age: {age}
      </h3>
    </div>
  );
}

function DayFourteen() {
  return (
    <>
      <section id="center">
        <div>
          <h3>Day 14 React/TS Learning</h3>
          <div id="root">
            <div>
              <UserCard username="Reza" age="44" />
              <UserCard username="Ryan" age="10" />
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

export default DayFourteen;
