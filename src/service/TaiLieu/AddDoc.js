import { ADD_DOC } from "../apiConstant.js";
import axios from "axios";
export const add_doc = async (auth, data) => {
  return axios({
    method: "post",
    url: ADD_DOC,
    headers: { auth: auth },
    data,
  });
};
