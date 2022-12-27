import { VIEW_DOC } from "../apiConstant.js";
import axios from "axios";
export const view_doc = async (auth, id) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    url: VIEW_DOC,
    // id,
    data: {
      docs_id: id,
    },
  });
};
