const authConfig = {
  authority: "http://localhost:8080", //Replace with your issuer URL
  client_id: "238280183927341063@dev", //Replace with your client id
  redirect_uri: "http://localhost:5173/callback",
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: "http://localhost:5173/",
  userinfo_endpoint: "http://localhost/oidc/v1/userinfo", //Replace with your user-info endpoint
  response_mode: "query",
  code_challenge_method: "S256",
};

export default authConfig;
