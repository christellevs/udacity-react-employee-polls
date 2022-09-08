import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./users.js";
import { receiveQuestions } from "./questions.js";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
