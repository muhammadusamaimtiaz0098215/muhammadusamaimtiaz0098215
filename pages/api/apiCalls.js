import { env } from "../../enviornments/enviornment";
import axios from "axios";

export const LoginAPI = (userData) => {
  const { email, password } = userData;
  // return axios.post(`${env.BaseURL}/api/v1/auth/login`, {
  //   email: userData.email,
  //   password: userData.password,
  // });
  const res = axios.post(
    "https://887f-103-159-79-148.ngrok.io/api/v1/auth/login",
    {
      email,
      password,
    }
  );
  console.log(res);
  return res;
};

export const CityAPI = async () => {
  const res = await axios.get(`${env.CityURL}`);
  return res;
};

export const AreaAPI = (data) => {
  const res = axios.get(`${env.AreaURL}` + data);
  return res;
};

export const CategoryAPI = () => {
  const res = axios(`${env.CategoryURL}`);
  return res;
};
