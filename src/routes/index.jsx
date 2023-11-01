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
import authConfig from "../authConfig.js";

//import view post edit
import PostEdit from "../views/posts/edit.jsx";

function RoutesIndex() {
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    ...authConfig,
  });

  //import new
  function authorize() {
    userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  }

  //import new
  // function clearAuth() {
  //   userManager.signoutRedirect();
  // }

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

    // Callback untuk signinRedirectCallback
    userManager.signinRedirectCallback().then((user) => {
      if (user) {
        const accessToken = user.access_token;
        console.log(accessToken);
      }
    });
  }, [userManager]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login auth={authenticated} handleLogin={authorize} />}
      />

      {/* route "/" */}
      <Route path="/home" element={<Home />} />

      {/* route "/posts" */}
      <Route path="/posts" element={<PostIndex />} />

      {/* route "/posts/create" */}
      <Route path="/posts/create" element={<PostCreate />} />

      {/* route "/posts/edit/:id" */}
      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  );
}

export default RoutesIndex;
