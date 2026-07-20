import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>** Home page **</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>** About page **</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>** 404 Not Found **</h2>
    </div>
  );
}

export function Day25() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <h1>Day 25 Practice</h1>

        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Home
          </NavLink>
          {" | "}
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            About
          </NavLink>
          {" | "}
          <NavLink
            to="/contact"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
