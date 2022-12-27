import { GET_POST } from "../apiConstant.js";
import axios from "axios";
export const get_posts = async (auth) => {
  return axios({
    method: "get",
    url: GET_POST,
    headers: { auth: auth },
  });
};
