import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
