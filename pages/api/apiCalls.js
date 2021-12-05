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
// http://5ee7-103-159-79-148.ngrok.io/
//${env.BaseURL}/api/v1/professionals/create
//const token = localStorage.getItem("token");
export const Add_professionalsAPI = (data) => {
  // const {
  //   name,
  //   username,
  //   email,
  //   category,
  //   geocodes,
  //   city,
  //   area,
  //   displaypicture,
  //   portfoliopicture,
  // } = data;
  // console.log("Getting form data", data.get("name"));

  console.log("Display pic at api calls", data.get("category"));

  let str_arr = data.get("category");
  let arr = str_arr.split(",");
  console.log("getting ARR", arr);
  data.set("category", arr);

  const res = axios.post(
    `${env.BaseURL}/api/v1/professionals/create`,
    data,
    // {
    //   name: data.get("name"),
    //   username: data.get("username"),
    //   email: data.get("email"),
    //   categories: arr,
    //   location: data.get("geocodes"),
    //   city: data.get("city"),
    //   area: data.get("area"),
    //   photo: { uri: "" },
    // },

    {
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM4MjUyNzg2fQ.iGZ3umwYrYc2bvW4m3TuWkeetWiEc8W_RCPgNC-6tQk
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM4MjUyNzg2fQ.iGZ3umwYrYc2bvW4m3TuWkeetWiEc8W_RCPgNC-6tQk`,
      },
    }
  );
  console.log("Display pic at api calls", data.get("category"));
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
