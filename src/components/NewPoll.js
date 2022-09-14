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
      <h2>Would You Rather?</h2>
      <h4>Create Your Own Poll</h4>

      <form className="new-poll" onSubmit={handleSubmit}>
        <div className="new-poll-inputs-container">
          <div className="new-poll-div">
            <label>Option One:</label>
            <input
              type="text"
              value={optionOneText}
              placeholder="Option One..."
              onChange={onChangeOptionOne}
              className="new-poll-input"
            />
          </div>
          <div className="new-poll-div">
            <label>Option Two:</label>
            <input
              type="text"
              value={optionTwoText}
              placeholder="Option Two..."
              onChange={onChangeOptionTwo}
              className="new-poll-input"
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-new-poll"
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
