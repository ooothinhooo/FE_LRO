import { ADD_POST } from "../apiConstant.js";
import axios from "axios";
export const add_post = async (auth, data) => {
  return axios({
    method: "post",
    url: ADD_POST,
    headers: { auth: auth },
    data,
  });
};
