import { connect } from "react-redux";
import Poll from "./Poll.js";

const Dashboard = (props) => {
  return (
    <div>
      <h3>Employee Web Polls</h3>
      <div>
        <ul className="poll-list">
          {props.questionIds.map((id) => (
            <Poll key={id} id={id} />
          ))}
        </ul>
        {/* <label>Answered</label>
        <input type="radio" />
        <label>Unanswered</label>
        <input type="radio" /> */}
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
