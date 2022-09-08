import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers.js";

const Poll = (props) => {
  console.log(props);

  return (
    <Link to={`questions/${props.question.id}`} className="poll">
      <h5>{props.question.author}</h5>
      <p>{formatDate(props.question.timestamp)}</p>
      <button>View</button>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Poll);
