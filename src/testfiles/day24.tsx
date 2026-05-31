import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return <h2>Welcome Home</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Profile() {
  return <h2>This is my Profile page</h2>;
}

function Setting() {
  return <h2>This is my Setting page</h2>;
}

function NotFound() {
  return <h2>404: Page Not Found</h2>;
}

function UserProfile() {
  const params = useParams();
  return (
    <div>
      <h2>Fetching data for user : {params.userId} </h2>
    </div>
  );
}

export function Day24() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>| <Link to="/setting">Setting</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
