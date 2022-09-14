import { useState } from "react";
import { connect } from "react-redux";
import Poll from "./Poll.js";

const Dashboard = (props) => {
  const [answered, setAnswered] = useState(false);
  const [unanswered, setUnanswered] = useState(true);

  const filteredAnswered = Object.values(props.questions)
    .filter(
      (question) =>
        question.optionOne.votes.includes(props.authedUser) ||
        question.optionTwo.votes.includes(props.authedUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const filteredUnanswered = Object.values(props.questions)
    .filter(
      (question) =>
        !question.optionOne.votes.includes(props.authedUser) &&
        !question.optionTwo.votes.includes(props.authedUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const onChangeAnswered = (e) => {
    setAnswered(!answered);
    setUnanswered(!unanswered);
  };

  const onChangeUnanswered = (e) => {
    setAnswered(!answered);
    setUnanswered(!unanswered);
  };

  return (
    <div className="dashboard-container">
      <h2>Employee Web Polls</h2>
      <form className="dashboard-list-selectors">
        <label>
          <input
            type="radio"
            name="answered"
            checked={answered}
            value={answered}
            onChange={onChangeAnswered}
          />
          Answered
        </label>

        <label className="label-right">
          <input
            type="radio"
            name="unanswered"
            checked={unanswered}
            value={unanswered}
            onChange={onChangeUnanswered}
          />
          Unanswered
        </label>
      </form>
      {filteredUnanswered.length === 0 && unanswered && (
        <div>No new polls! Go Create Some!</div>
      )}
      {filteredAnswered.length === 0 && !unanswered && (
        <div>No polls answered!</div>
      )}
      <div>
        {unanswered
          ? filteredUnanswered.map((q) => <Poll key={q.id} id={q.id} />)
          : filteredAnswered.map((q) => <Poll key={q.id} id={q.id} />)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Dashboard);
