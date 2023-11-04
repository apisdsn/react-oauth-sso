import axios from "axios";

const getStoredToken = async () => {
  const storedTokenKey =
    "oidc.user:http://localhost:8080:238280183927341063@dev";
  const storedToken = JSON.parse(localStorage.getItem(storedTokenKey));

  if (!storedToken || !storedToken.access_token) {
    console.error("Token tidak ditemukan. Harap login terlebih dahulu.");
    return null;
  }

  return storedToken.access_token;
};

const token = await getStoredToken();
console.log("Ini Token dari async : ", token);

const Api = axios.create({
  baseURL: "http://localhost:9090/api/v1/image",
  headers: {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
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
