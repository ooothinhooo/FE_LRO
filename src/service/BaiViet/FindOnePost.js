import { GET_FIND_POST } from "../apiConstant.js";
import axios from "axios";
export const find_one_post = async (id) => {
  return axios({
    method: "post",
    url: GET_FIND_POST,
    // id,
    data: {
      post_id: id,
    },
  });
};
