import { GET_FIND_DOC } from "../apiConstant.js";
import axios from "axios";
export const find_one_doc = async (id) => {
  return axios({
    method: "post",
    url: GET_FIND_DOC,
    // id,
    data: {
      docs_id: id,
    },
  });
};
