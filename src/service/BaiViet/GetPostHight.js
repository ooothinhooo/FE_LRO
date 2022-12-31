import { GET_POST_HIGHT } from "../apiConstant.js";
import axios from "axios";
export const post_hight = async (page) => {
  return axios({
    method: "get",
    url: GET_POST_HIGHT,
    params: { s: page },
  });
};
