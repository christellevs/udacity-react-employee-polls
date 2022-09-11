import { saveQuestion, saveQuestionAnswer } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading-bar";

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
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ id, authedUser, option }) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    option,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handleAnswerQuestion: ", e);
      dispatch(answerQuestion(info));
      alert("There was an error voting in the poll. Please try again.");
    });
  };
}
