import { env } from "../../enviornments/enviornment";
import axios from "axios";

export const LoginAPI = (userData) => {
  return axios.post(`${env.BaseURL}/api/v1/auth/login`, {
    email: userData.email,
    password: userData.password,
  });
};

export const CityAPI = async () => {
  //   const res = axios.get("https://jsonplaceholder.typicode.com/users");
  const res = await axios.get("https://graana.com/api/city");
  return res;
};
