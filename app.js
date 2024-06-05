import React from "react";
import ReactDOM from "react-dom";

const logo = () => (
    <div id="logo">
        <img src="Images\152276850.jfif" alt="a" />
    </div>
);

const searchbar = () => (
    <div id="searchbar">
        <input type="text" placeholder="Search..." />
    </div>
);

const user =() => (
    <div id="user">
        <img src="Images\profile.png" alt="u" />dddddddddddddddddddddddddddddddddddddddddddddddddd
    </div>
);
const Header = () => (
    <div id="header">
        {logo}
        {searchbar}
        {user}
    </div>
);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render({Header()});
