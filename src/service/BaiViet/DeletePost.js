import { DELETE_POST } from "../apiConstant.js";
import axios from "axios";
export const delete_post = async (auth, id) => {
  return axios({
    method: "post",
    url: DELETE_POST,
    headers: { auth: auth },
    data: {
      post_id: id,
    },
  });
};
