import { GET_DOC_LIST } from "../apiConstant.js";
import axios from "axios";
export const get_doc_list = async (auth, page) => {
  return axios({
    method: "get",
    url: GET_DOC_LIST,
    headers: { auth: auth },
    params: { page: page },
  });
};
