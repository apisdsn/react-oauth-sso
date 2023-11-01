import axios from "axios";
const token =
  "RlF0c9M3PboHpu8Oy9mYi8OYCeyvc6R_aDb0y3HH4_EjlHf7L23B1lsJTDGQGld_Xg5ii5w";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const Api = axios.create({
  baseURL: "http://localhost:9090/api/v1/image",
});

export default Api;
