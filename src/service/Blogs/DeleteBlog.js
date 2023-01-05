import axios from "axios";
import { DELETE_BLOG } from "../Blogs.api.js";
export const delete_blog = async (auth, id) => {
  return axios({
    method: "post",
    url: DELETE_BLOG,
    headers: { auth: auth },
    data: {
      blog_id: id,
    },
  });
};
