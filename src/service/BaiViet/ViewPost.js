import { VIEW_POST } from "../apiConstant.js";
import axios from "axios";
export const view_post = async (auth, id) => {
  return axios({
    method: "post",
    headers: { auth: auth },
    url: VIEW_POST,
    // id,
    data: {
      post_id: id,
    },
  });
};
