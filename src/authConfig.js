const authConfig = {
  authority:
    "https://universitasteknologidigitalindonesia-16iese.zitadel.cloud", //Replace with your issuer URL
  client_id: "233740103669860552@sso", //Replace with your client id
  redirect_uri: "http://localhost:5173/callback",
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: "http://localhost:5173/logout",
  userinfo_endpoint:
    "https://universitasteknologidigitalindonesia-16iese.zitadel.cloud/oidc/v1/userinfo", //Replace with your user-info endpoint
  response_mode: "query",
  code_challenge_method: "S256",
};

export default authConfig;
