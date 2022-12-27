import { GET_DOC } from "../apiConstant.js";
import axios from "axios";
export const get_doc = async (auth) => {
  return axios({
    method: "get",
    url: GET_DOC,
    headers: { auth: auth },
  });
};
