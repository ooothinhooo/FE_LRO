import { GET_DOC_HIGHT } from "../apiConstant.js";
import axios from "axios";
export const doc_hight = async (page) => {
  return axios({
    method: "get",
    url: GET_DOC_HIGHT,
    params: { s: page },
  });
};
