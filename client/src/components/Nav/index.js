import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">HOME</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/log-in">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sign-up">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
