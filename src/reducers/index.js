import { combineReducers } from "redux";
import authedUser from "./authedUser.js";
import users from "./users.js";
import questions from "./questions.js";

export default combineReducers({
  authedUser,
  users,
  questions,
});
