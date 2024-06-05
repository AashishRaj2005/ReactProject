import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const logo = (
  <div id="logo">
    <img url="Images/152276850.png" alt="a" />
  </div>
);

const searchbar = (
  <div id="searchbar">
    <input type="text" placeholder="Search..." />
  </div>
);

const user = (
  <div id="user">
    <img url="Images/profile.png" alt="u" />
  </div>
);
const Header = () => (
  <header id="header">
    <nav>
      <img url={"Images/152276850.png"} alt="a" />
      <input type="text" placeholder="Search..." />
      <img url={"Images/profile.png"} alt="u" />
    </nav>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header></Header>);
