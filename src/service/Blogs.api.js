// const API_URL = "http://localhost:8080";
const API_URL = process.env.REACT_APP_API_KEY;

export const FIND_ONE_BLOG = `${API_URL}/get/findoneblog`;

//* Create blogs
export const ADD_BLOG = `${API_URL}/blogs/addblog`;
export const GET_BLOG_LIST = `${API_URL}/blogs/bloglist`;
export const DELETE_BLOG = `${API_URL}/blogs/deleteblog`;
export const ISPRIVATE_BLOG = `${API_URL}/blogs/isPrivateblog`;
