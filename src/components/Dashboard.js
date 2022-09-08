import { connect } from "react-redux";
const Dashboard = (props) => {
  return (
    <div>
      <h3>Employee Web Polls</h3>
      <div>
        <ul>
          {props.questionIds.map((id) => (
            <li key={id}>
              <div>Question ID {id}</div>
            </li>
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
