import { GET_FIND_DOC } from "../apiConstant.js";
import axios from "axios";
export const find_one_doc = async (id) => {
  return axios({
    method: "get",
    url: "http://localhost:8080/api/findonedoc",
    // id,
    data: {
      _id: id,
    },
  });
};
