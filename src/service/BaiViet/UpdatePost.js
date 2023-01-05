import { ADD_POST, UPDATE_POST } from "../apiConstant.js";
import axios from "axios";
export const update_post = async (auth, data) => {
  return axios({
    method: "post",
    url: UPDATE_POST,
    headers: { auth: auth },
    data,
  });
};
