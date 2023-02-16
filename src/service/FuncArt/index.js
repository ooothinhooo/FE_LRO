import axios from "axios";
import { PAGE_ARTS } from "../apiConstant.js";
import { INTERACT_ART } from "../art.api.js";

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
