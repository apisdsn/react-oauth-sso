//import - new
import React, { useState, useEffect } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import authConfig from "./authConfig";
//import Link from react router dom
import { Link } from "react-router-dom";

//import routes
import Routes from "./routes";

// import new
/* const userManager = new UserManager({
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  ...authConfig,
});

//import new
function authorize() {
  userManager.signinRedirect({});
}

//import new
function clearAuth() {
  userManager.signoutRedirect();
}

const [authenticated, setAuthenticated] = useState(null);
const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
  userManager.getUser().then((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
}, [userManager]); */

export default function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand" />

            <Link to="/home" className="navbar-brand">
              HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/posts"
                    className="nav-link active"
                    aria-current="page"
                  >
                    POSTS
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
                <a href="#" className="btn btn-success">
                  DATA API
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />
    </>
  );
}
