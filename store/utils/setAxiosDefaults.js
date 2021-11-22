import axios from "axios";
import router from "next/router";
import NProgress from 'nprogress';
import Cookies from "js-cookie";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { apiEndpoint } = publicRuntimeConfig;

const setAxiosDefaults = () => {
  axios.defaults.baseURL = apiEndpoint;
  axios.defaults.withCredentials = true;
  axios.interceptors.request.use(
    (config) => {
      NProgress.start();
      return config;
    },
    (error) => Promise.reject(error)
  );
  axios.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    } ,
    (error) => {
      NProgress.done();
      if (error.response && error.response.status === 401) {
        console.log("Auth Cookie:", Cookies.get("accessToken"));
        Cookies.remove("accessToken");
        Cookies.remove("currentUser");
        Cookies.remove("domains");

        error.response.data = {
          Session: "Expired!",
        };
        router.push("/signin?auth_faild=true");
      } else if (error.response && error.response.status === 409) {
        router.push("/subscription?sub_required=true");
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export default setAxiosDefaults;
