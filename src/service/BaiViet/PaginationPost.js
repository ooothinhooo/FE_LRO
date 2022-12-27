import { PAGINATION_POST } from "../apiConstant.js";
import axios from "axios";
export const pagination_post = async (page) => {
  return axios({
    method: "get",
    url: PAGINATION_POST,
    params: { page: page },
  });
};
