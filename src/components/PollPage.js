import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatQuestion } from "../utils/helpers.js";
import { handleAnswerQuestion } from "../actions/questions.js";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const calculatePercent = (optionVotes, totalVotes) =>
  Math.round((optionVotes / totalVotes) * 100 * 10) / 10;

const PollPage = (props) => {
  const {
    name,
    avatar,
    timestamp,
    optionOneText,
    optionOneVotes,
    optionTwoText,
    optionTwoVotes,
    isAnswered,
    isOptionOneVoted,
    isOptionTwoVoted,
  } = props.question;

  const totalVotes = optionOneVotes.length + optionTwoVotes.length;

  console.log("option one: ", isOptionOneVoted);
  console.log("option two: ", isOptionTwoVoted);

  const onChangeVoteOne = (e) => {
    e.preventDefault();
    const { dispatch, question, authedUser } = props;
    dispatch(
      handleAnswerQuestion({
        qid: question.id,
        authedUser,
        answer: "optionOne",
      })
    );
  };

  const onChangeVoteTwo = (e) => {
    e.preventDefault();
    const { dispatch, question, authedUser } = props;
    dispatch(
      handleAnswerQuestion({
        qid: question.id,
        authedUser,
        answer: "optionTwo",
      })
    );
  };

  return (
    <div>
      <div>
        <h3>Poll by {name}</h3>
        <h6>at {timestamp}</h6>
        <img src={avatar} alt="Poll Author Avatar" />
        <h2>Would you rather?</h2>
      </div>
      {!isAnswered ? (
        <div className="poll-page-options-container">
          <div className="poll-page-option">
            <p>{optionOneText}</p>
            <button onClick={onChangeVoteOne} className="btn btn-vote">
              Vote
            </button>
          </div>
          <div className="poll-page-option">
            <p>{optionTwoText}</p>
            <button onClick={onChangeVoteTwo} className="btn btn-vote">
              Vote
            </button>
          </div>
        </div>
      ) : (
        <div className="poll-page-answers-container">
          <div
            className={isOptionOneVoted ? "option-voted" : "poll-page-option "}
          >
            <p>{optionOneText}</p>
            <p>
              Votes: {optionOneVotes.length} -{" "}
              {calculatePercent(optionOneVotes.length, totalVotes)} %
            </p>
          </div>
          <div
            className={isOptionTwoVoted ? "option-voted" : "poll-page-option "}
          >
            <p>{optionTwoText}</p>
            Votes: {optionTwoVotes.length} -{" "}
            {calculatePercent(optionTwoVotes.length, totalVotes)} %
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  return {
    id,
    question: formatQuestion(question, users[question.author], authedUser),
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
