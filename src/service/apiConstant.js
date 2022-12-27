const API_URL = process.env.API_URL;

export const LOGIN = `${API_URL}/api/login`;
export const REGISTER = `${API_URL}/api/register`;

//! getall => /get/path
//! get all docs
export const GET_ALL_DOC = `${API_URL}/get/alldocs`;
//! get find one doc
export const GET_FIND_DOC = `${API_URL}/get/findonedocs`;
//! get all posts
export const GET_ALL_POST = `${API_URL}/get/allpost`;
//! get find one doc
export const GET_FIND_POST = `${API_URL}/get/findonepost`;

//! get pagination with docs
export const PAGINATION_DOC = `${API_URL}/get/pagedoc`;

//! get pagination with posts

export const PAGINATION_POST = `${API_URL}/get/pagepost`;

//? docs => /docs/path
//* Create doc
export const ADD_DOC = `${API_URL}/docs/adddoc`;
export const DELETE_DOC = `${API_URL}/docs/deletedoc`;
//* get docs for user
export const GET_DOC = `${API_URL}/docs/getdoc`;
//* like doc
export const LIKE_DOC = `${API_URL}/docs/likedoc`;
//* view doc
export const VIEW_DOC = `${API_URL}/docs/viewdoc`;

//? posts => /post/path
export const ADD_POST = `${API_URL}/post/addpost`;
export const UPDATE_POST = `${API_URL}/post/updatepost`;
export const DELETE_POST = `${API_URL}/post/deletepost`;
export const VIEW_POST = `${API_URL}/post/viewpost`;
export const LIKE_POST = `${API_URL}/post/likepost`;
export const GET_POST = `${API_URL}/post/getpost`;
