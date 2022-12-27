import { REGISTER } from "../apiConstant.js";
import axios from "axios";
export const register = async (data) => {
  return axios.post(REGISTER, data);
};
