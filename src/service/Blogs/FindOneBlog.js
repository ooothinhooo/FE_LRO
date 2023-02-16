import axios from "axios";
import { FIND_ONE_BLOG } from "../Blogs.api.js";
export const find_one_blog = async (id) => {
  return axios({
    method: "post",
    url: FIND_ONE_BLOG,
    // id,
    data: {
      blog_id: id,
    },
  });
};
