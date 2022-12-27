import { fetchUser } from "../utils/fectLocalStorageData.js";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
