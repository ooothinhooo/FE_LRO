import { PAGINATION_DOC } from "../apiConstant.js";
import axios from "axios";
export const pagination_doc = async (page) => {
  return axios({
    method: "get",
    url: PAGINATION_DOC,
    params: { page: page },
  });
};
