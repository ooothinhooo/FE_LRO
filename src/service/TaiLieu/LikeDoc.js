import { LIKE_DOC } from "../apiConstant.js";
import axios from "axios";
export const like_doc = async (auth, data) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    data,
    url: LIKE_DOC,
    // id,
    data,
  });
};
