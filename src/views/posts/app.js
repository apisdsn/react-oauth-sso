import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Callback from "./callback";
import authConfig from "./authConfig";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

function App() {
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
  const [userInfo, setUserInfo] = useState(null);

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Login auth={authenticated} handleLogin={authorize} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
