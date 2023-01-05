import axios from "axios";
import { VIEW_DOC_USER, VIEW_USER } from "./apiConstant.js";
export const view_user = async (id) => {
  return axios({
    method: "get",
    url: VIEW_USER,
    params: {
      uid: id,
    },
  });
};

export const view_doc_user = async (page, id) => {
  return axios({
    method: "get",
    url: VIEW_DOC_USER,
    params: {
      uid: id,
      page: page,
    },
  });
};



