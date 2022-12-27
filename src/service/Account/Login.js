import { LOGIN } from "../apiConstant.js";
import axios from "axios";
export const login = async (data) => {
  return axios.post(LOGIN, data);
};
