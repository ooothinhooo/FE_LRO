import {
  DOCS_HIGHT,
  FIND_ONE_DOC,
  GET_DOC_LIST,
  PAGE_DOCS,
} from "../apiConstant.js";
import axios from "axios";
import {
  CREATE_DOC,
  DOCS_LIST,
  HIGHT_LIGHT_DOC,
  INTERACT_DOC,
  REMOVE_DOC,
  SETISPRIVATE_DOC,
  VIEW_DOC,
} from "../Docs.api.js";

export const FUNC_PAGE_DOCS = async (page, cate) => {
  return axios({
    method: "get",
    url: PAGE_DOCS,
    params: { page: page, cate: cate },
  });
};

export const FUNC_HIGHT_LIGHT_DOC = async (page) => {
  return axios({
    method: "get",
    url: DOCS_HIGHT,
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

export const FUNC_FIND_ONE_DOC = async (_id) => {
  return axios({
    method: "post",
    url: FIND_ONE_DOC,
    data: {
      _id: _id,
    },
  });
};

export const FUNC_COUNT_VIEW_DOC = async (auth, _id) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    url: VIEW_DOC,
    // id,
    data: {
      _id: _id,
    },
  });
};

export const FUNC_DOC_LIST_FOR_USER = async (auth, page) => {
  return axios({
    method: "get",
    headers: { auth: auth },
    url: DOCS_LIST,
    params: { page: page },
  });
};

export const FUNC_DELETE_DOC = async (auth, _id) => {
  return axios({
    method: "post",
    url: REMOVE_DOC,
    headers: { auth: auth },
    data: {
      _id: _id,
    },
  });
};

export const FUNC_SET_IS_PRIVATE_DOC = async (auth, _id) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    url: SETISPRIVATE_DOC,
    data: {
      _id: _id,
    },
  });
};
