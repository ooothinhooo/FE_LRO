import axios from "axios";
import { LOGIN } from "./apiConstant.js";

// export const API_URL = "http://localhost:8080";
export const API_URL = process.env.REACT_APP_API_KEY;
export const API_DOC_URL = "apidocs";
export const API_ART_URL = "apiart";

export const FUNC_LOGIN = async (data) => {
  return axios({
    method: "post",
    url: LOGIN,
    data,
  });
};

export const FUNC_VIEW_PROFILE_USER = async (_id) => {
  return axios({
    method: "post",
    // headers: { auth: auth },

    url: `${API_URL}/api/user/`,
    data: {
      _id: _id,
    },
  });
};

export const FUNC_UPDATE_PROFILE_USER = async (auth,data) => {
  return axios({
    method: "post",
    headers: { auth: auth },

    url: `${API_URL}/apiart/updateinfo`,
    data
  });
};

export const FUNC_CHANGE_PASS_USER = async (auth,password) => {
  return axios({
    method: "post",
    headers: { auth: auth },

    url: `${API_URL}/apiart/changepass`,
    data: {
      password: password,
    },
  });
};