import { combineReducers } from "redux";
import post from "./post";
import user from "./user";

const reducers = combineReducers({
  memories: post,
  user: user
});

export default reducers;
