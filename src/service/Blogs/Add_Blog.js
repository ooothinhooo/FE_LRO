import axios from "axios";
import { ADD_BLOG } from "../Blogs.api.js";
export const add_blog = async (auth, data) => {
  return axios({
    method: "post",
    url: ADD_BLOG,
    headers: { auth: auth },
    data,
  });
};
