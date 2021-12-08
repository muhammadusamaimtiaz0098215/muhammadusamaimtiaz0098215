import { env } from "../../enviornments/enviornment";
import axios from "axios";

export const LoginAPI = (userData) => {
  const { email, password } = userData;
  const res = axios.post(`${env.BaseURL}/api/v1/auth/login`, {
    email: email,
    password: password,
  });
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
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = axios.post(
    `${env.BaseURL}/api/v1/professionals/create`,
    data,
    config
  );
  return res;
};

export const Get_Profesionals = (data) => {
  const res = axios.post(
    `${env.BaseURL}/api/v1/professionals/filter?page=${data}`,
    {
      professionalName: null,
      categoryId: null,
      rating: null,
      completedTask: null,
    }
  );
  return res;
};

export const View_Professional = (id) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = axios.get(
    `${env.BaseURL}/api/v1/professionals/${id}/getProfessional`,
    config
  );
  return res;
};

export const Edit_Professionals = (id, data) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = axios.put(
    `${env.BaseURL}/api/v1/professionals/${id}/editProfessional`,
    data,
    config
  );
  return res;
};
