import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatQuestion } from "../utils/helpers.js";

const Poll = (props) => {
  const { id, name, avatar, timestamp } = props.question;

  return (
    <Link to={`questions/${id}`} className="poll">
      <div>
        <img
          src={avatar}
          alt="Poll Author Avatar"
          className="dashboard-avatar"
        />
        <h5>{name}</h5>
        <p>{timestamp}</p>
        <button className="btn btn-dashboard-view">View</button>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(Poll);
