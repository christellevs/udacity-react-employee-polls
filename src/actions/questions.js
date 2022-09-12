import { saveQuestion, saveQuestionAnswer } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionToUser } from "./users.js";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(answerQuestion({ authedUser, qid, answer }));

    return saveQuestionAnswer({ authedUser, qid, answer }).catch((e) => {
      console.warn("Error in handleAnswerQuestion: ", e);
      dispatch(answerQuestion({ authedUser, qid, answer }));
      alert("There was an error voting in the poll. Please try again.");
    });
  };
}
