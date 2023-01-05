import axios from "axios";
import { GET_BLOG_LIST } from "../Blogs.api.js";
export const get_blogs_list = async (auth, page) => {
  return axios({
    method: "get",
    url: GET_BLOG_LIST,
    headers: { auth: auth },
    params: { page: page },
  });
};
