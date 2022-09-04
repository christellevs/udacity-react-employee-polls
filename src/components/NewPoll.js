import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPoll = () => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const onChangeOptionOne = (e) => {
    console.log(e.target.value); // TODO - remove
    setOptionOne(e.target.value);
  };

  const onChangeOptionTwo = (e) => {
    console.log(e.target.value); // TODO - remove
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOptionOne("");
    setOptionTwo("");
    navigate("/");
  };

  return (
    <div>
      <h3>Would You Rather?</h3>
      <h6>Create Your Own Poll</h6>

      <form className="new-poll" onSubmit={handleSubmit}>
        <div>
          <label>First Option</label>
          <input type="text" value={optionOne} onChange={onChangeOptionOne} />
        </div>
        <div>
          <label>Second Option</label>
          <input type="text" value={optionTwo} onChange={onChangeOptionTwo} />
        </div>
        <div>
          <button
            className="btn"
            type="submit"
            disabled={optionOne === "" || optionTwo === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPoll;
