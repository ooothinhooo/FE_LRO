import { DELETE_DOC } from "../apiConstant.js";
import axios from "axios";
export const delete_doc = async (auth, id) => {
  return axios({
    method: "post",
    url: DELETE_DOC,
    headers: { auth: auth },
    data: {
      docs_id: id,
    },
  });
};
