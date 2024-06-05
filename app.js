import React from "react";
import ReactDOM from "react-dom/client";

const logo = (
  <div id="logo">
    <img src="152276850.png" alt="a" />
  </div>
);

const searchbar = (
  <div id="searchbar">
    <input type="text" placeholder="Search..." />
  </div>
);

const user = (
  <div id="user">
    <img src="profile.png" alt="u" />
  </div>
);
const Header = () => (
  <div id="header">
    {logo}
    {searchbar}
    {user}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header></Header>);
