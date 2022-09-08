import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helpers.js";

const PollPage = (props) => {
  return (
    <div>
      <h3>Would you rather?</h3>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(PollPage);
