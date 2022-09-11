import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from "../actions/questions.js";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.option]: {
            ...state[action.id][action.option],
            votes: state[action.id][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };
    default:
      return state;
  }
}

// function optionTypeHelper() {

//   optionType =

//   return optionType
// }
