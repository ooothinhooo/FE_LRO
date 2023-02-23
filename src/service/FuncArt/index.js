import axios from "axios";
import { FIND_ONE_ART, PAGE_ARTS } from "../apiConstant.js";
import {
  ARTS_LIST,
  CREATE_ART,
  INTERACT_ART,
  REMOVE_ART,
  SETISPRIVATE_ART,
} from "../art.api.js";

export const FUNC_PAGE_ART = async (page) => {
  return axios({
    method: "get",
    url: PAGE_ARTS,
    params: { page: page },
  });
};

export const FUNC_INTERACT_ART = async (auth, data) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    data,
    url: INTERACT_ART,
  });
};

export const FUNC_CREATE_ART = async (auth, data) => {
  return axios({
    method: "post",
    url: CREATE_ART,
    headers: { auth: auth },
    data,
  });
};

export const FUNC_FIND_ONE_ART = async (_id) => {
  return axios({
    method: "post",
    url: FIND_ONE_ART,
    data: {
      _id: _id,
    },
  });
};

export const FUNC_ART_LIST_FOR_USER = async (auth, page) => {
  return axios({
    method: "get",
    headers: { auth: auth },
    url: ARTS_LIST,
    params: { page: page },
  });
};

export const FUNC_DELETE_ART = async (auth, _id) => {
  return axios({
    method: "post",
    url: REMOVE_ART,
    headers: { auth: auth },
    data: {
      _id: _id,
    },
  });
};

export const FUNC_SET_IS_PRIVATE_ART = async (auth, _id) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    url: SETISPRIVATE_ART,
    data: {
      _id: _id,
    },
  });
};
