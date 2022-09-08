import { useState } from "react";
import { connect } from "react-redux";
import Poll from "./Poll.js";

const Dashboard = (props) => {
  const [answered, setAnswered] = useState(false);
  const [unanswered, setUnanswered] = useState(true);

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
          {props.questionIds.map((id) => (
            <Poll key={id} id={id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
