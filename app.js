import React from "react";
import ReactDOM from "react-dom";

const logo = () => (
    
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
