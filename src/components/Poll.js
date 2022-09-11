import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatQuestion } from "../utils/helpers.js";

const Poll = (props) => {
  const { id, name, avatar, timestamp, optionOneText, optionTwoText } =
    props.question;

  return (
    <Link to={`questions/${id}`} className="poll">
      <div>
        <img src={avatar} alt="Poll Author Avatar" />
      </div>
      <div>
        <h5>{name}</h5>
        <p>{timestamp}</p>
        <p>Option 1: {optionOneText}</p>
        <p>Option 2: {optionTwoText}</p>
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
