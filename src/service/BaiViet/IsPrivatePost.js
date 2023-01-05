import { ISPRIVATE_POST } from "../apiConstant.js";
import axios from "axios";
export const isprivate_post = async (auth, id) => {
  return axios({
    method: "post",
    headers: { auth: auth },

    url: ISPRIVATE_POST,
    // id,
    data: {
      post_id: id,
    },
  });
};
