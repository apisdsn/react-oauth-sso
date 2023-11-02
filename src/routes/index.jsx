import React, { useState, useEffect } from "react";

//import react router dom
import { Routes, Route } from "react-router-dom";

import Login from "../views/posts/login.jsx";

//import view homepage
import Home from "../views/home.jsx";

//import view posts index
import PostIndex from "../views/posts/index.jsx";

//import view post create
import PostCreate from "../views/posts/create.jsx";

import { UserManager, WebStorageStateStore } from "oidc-client-ts";

import App from "../App.jsx";

import authConfig from "../authConfig.js";

//import view post edit
import PostEdit from "../views/posts/edit.jsx";

import Callback from "../views/posts/callback.jsx";

function RoutesIndex() {
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    ...authConfig,
  });

  function authorize() {
    userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  }

  function clearAuth() {
    userManager.signoutRedirect();
  }

  const [authenticated, setAuthenticated] = useState(null);
  // const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [userManager]);

  return (
    <Routes>
      <Route element={<App handleLogout={clearAuth} />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={<Login auth={authenticated} handleLogin={authorize} />}
      />
      <Route
        path="/callback"
        element={
          <Callback
            auth={authenticated}
            setAuth={setAuthenticated}
            userManager={userManager}
          />
        }
      />
      <Route path="/posts" element={<PostIndex />} />

      <Route path="/posts/create" element={<PostCreate />} />

      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  );
}

export default RoutesIndex;
