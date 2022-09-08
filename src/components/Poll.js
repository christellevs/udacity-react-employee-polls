import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate, formatQuestion } from "../utils/helpers.js";

const Poll = (props) => {
  console.log(props);

  const { id, name, avatar, timestamp } = props.question;
  return (
    <Link to={`questions/${id}`} className="poll">
      <img src={avatar} />
      <h5>{name}</h5>
      <p>{formatDate(timestamp)}</p>
      <button>View</button>
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
