interface WelcomeProps {
  name?: string;
}

const Welcome = ({ name }: WelcomeProps) => {
  let msg = "Welcome to React Learning Book Review";
  if (typeof name === "string" && name.trim() !== "") {
    msg += `, ${name}`;
  }

  return <p>{msg}</p>;
};

export default Welcome;
