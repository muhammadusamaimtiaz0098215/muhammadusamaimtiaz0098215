import { env } from "../../enviornments/enviornment";
import axios from "axios";

export const LoginAPI = (userData) => {
  const { email, password } = userData;
  const res = axios.post(`${env.BaseURL}/api/v1/auth/login`, {
    email: email,
    password: password,
  });
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

export const Add_professionalsAPI = (data) => {
  const { name, username, email, category, geocodes, city, area } = data;

  const res = axios.post(
    `${env.BaseURL}/api/v1/professionals/create`,
    {
      name: name,
      username: username,
      email: email,
      categories: category,
      location: geocodes,
      city: city,
      area: area,
    },
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM4MjUyNzg2fQ.iGZ3umwYrYc2bvW4m3TuWkeetWiEc8W_RCPgNC-6tQk`,
      },
    }
  );

  console.log(res);
  return res;
};

export const Get_Profesionals = () => {
  const res = axios.post(`${env.BaseURL}/api/v1/professionals/filter?page=1`, {
    professionalName: null,
    categoryId: null,
    rating: null,
    completedTask: null,
  });
  return res;
};
