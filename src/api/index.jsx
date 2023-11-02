import axios from "axios";

const accessToken = JSON.parse(
  localStorage.getItem(
    "oidc.user:https://universitasteknologidigitalindonesia-16iese.zitadel.cloud:233740103669860552@sso"
  )
)?.access_token;

console.log(`Token dari local storage: ${accessToken}`);

if (!accessToken) {
  console.error("Token tidak ditemukan. Harap login terlebih dahulu.");
}

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Access-Control-Allow-Origin": "*",
  },
};

const Api = axios.create({
  baseURL: "http://localhost:9090/api/v1/image",
  ...config,
});

export default Api;

// import axios from "axios";
// const token =
//   "EwFne_xmnEdLWS1mZq5ervlmp3y77mTx2e9H129AkTZ3IgAAAgAZg1tYiNi5rMnVzX89Is0";

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Access-Control-Allow-Origin": "*",
//   },
// };

// const Api = axios.create({
//   baseURL: "http://localhost:9090/api/v1/image",
//   method: "get",
//   ...config,
// });

// export default Api;
