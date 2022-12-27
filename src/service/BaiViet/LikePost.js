import { LIKE_POST } from "../apiConstant.js";
import axios from "axios";
export const like_post = async (auth, data) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    data,
    url: LIKE_POST,
    // id,
    data,
  });
};
