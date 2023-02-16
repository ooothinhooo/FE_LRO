import { GET_DOC_LIST, PAGE_DOCS } from "../apiConstant.js";
import axios from "axios";
import { CREATE_DOC, INTERACT_DOC } from "../Docs.api.js";

export const FUNC_PAGE_DOCS = async (page) => {
  return axios({
    method: "get",
    url: PAGE_DOCS,
    params: { page: page },
  });
};

export const FUNC_INTERACT_DOC = async (auth, data) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    data,
    url: INTERACT_DOC,
  });
};

export const FUNC_CREATE_DOC = async (auth, data) => {
  return axios({
    method: "post",
    url: CREATE_DOC,
    headers: { auth: auth },
    data,
  });
};
