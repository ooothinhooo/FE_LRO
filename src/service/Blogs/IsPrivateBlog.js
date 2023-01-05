import { ISPRIVATE_POST, LIKE_POST } from "../apiConstant.js";
import axios from "axios";
import { ISPRIVATE_BLOG } from "../Blogs.api.js";
export const isprivate_blog = async (auth, id) => {
  return axios({
    method: "post",
    headers: { auth: auth },

    url: ISPRIVATE_BLOG,
    data: {
      blog_id: id,
    },
  });
};
