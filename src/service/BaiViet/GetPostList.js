import { GET_POST_LIST } from "../apiConstant.js";
import axios from "axios";
export const get_post_list = async (auth, page) => {
  return axios({
    method: "get",
    url: GET_POST_LIST,
    headers: { auth: auth },
    params: { page: page },
  });
};
