import axios from "axios";

export const API_URL = "http://localhost:8080";
// export const API_URL = process.env.REACT_APP_API_KEY;
export const API_DOC_URL = "apidocs";
export const API_ART_URL = "apiart";

export const FUNC_VIEW_PROFILE_USER = async (_id) => {
  return axios({
    method: "post",

    url: "http://localhost:8080/api/user/",
    data: {
      _id: _id,
    },
  });
};
