import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate, formatQuestion } from "../utils/helpers.js";

const Poll = (props) => {
  console.log(props);

  const { id, name, avatar, timestamp } = props.question;
  return (
    <Link to={`questions/${id}`} className="poll">
      <div>
        <img src={avatar} />
      </div>
      <div>
        <h5>{name}</h5>
        <p>{formatDate(timestamp)}</p>
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
