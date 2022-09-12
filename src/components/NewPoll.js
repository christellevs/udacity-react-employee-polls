import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions.js";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const onChangeOptionOne = (e) => {
    setOptionOneText(e.target.value);
  };

  const onChangeOptionTwo = (e) => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  return (
    <div>
      <h3>Would You Rather?</h3>
      <h6>Create Your Own Poll</h6>

      <form className="new-poll" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={optionOneText}
            placeholder="Option One..."
            onChange={onChangeOptionOne}
          />
          <input
            type="text"
            value={optionTwoText}
            placeholder="Option Two..."
            onChange={onChangeOptionTwo}
          />
        </div>
        <div>
          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
