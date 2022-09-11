import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Poll from "./Poll.js";

const Dashboard = (props) => {
  const [answered, setAnswered] = useState(false);
  const [unanswered, setUnanswered] = useState(true);

  console.log(props.questions);

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

  console.log("answered", filteredAnswered);
  console.log("unanswerd", filteredUnanswered);

  const onChangeAnswered = (e) => {
    console.log("answered", e);

    setAnswered(!answered);
    setUnanswered(!unanswered);
  };

  const onChangeUnanswered = (e) => {
    console.log("unanswered", e);
    setAnswered(!answered);
    setUnanswered(!unanswered);
  };

  return (
    <div>
      <div>
        <h3>Employee Web Polls</h3>
        <label>Answered</label>
        <input
          type="radio"
          checked={answered}
          value={answered}
          onChange={onChangeAnswered}
        />
        <label>Unanswered</label>
        <input
          type="radio"
          checked={unanswered}
          value={unanswered}
          onChange={onChangeUnanswered}
        />
      </div>

      <div>
        <ul>
          {unanswered
            ? filteredUnanswered.map((q) => <Poll key={q.id} id={q.id} />)
            : filteredAnswered.map((q) => <Poll key={q.id} id={q.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  questions,
});

export default connect(mapStateToProps)(Dashboard);
