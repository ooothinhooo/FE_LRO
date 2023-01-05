import { ISPRIVATE_DOC, ISPRIVATE_POST, LIKE_POST } from "../apiConstant.js";
import axios from "axios";
export const isprivate_doc = async (auth, id) => {
  return axios({
    method: "post",
    headers: { auth: auth },

    url: ISPRIVATE_DOC,
    data: {
      docs_id: id,
    },
  });
};
