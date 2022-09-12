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
  } = props.question;

  const totalVotes = optionOneVotes.length + optionTwoVotes.length;

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
        <h4>at {timestamp}</h4>
        <img src={avatar} alt="Poll Author Avatar" />
        <h3>Would you rather?</h3>
      </div>
      {!isAnswered ? (
        <div>
          <div>
            <p>{optionOneText}</p>
            <button onClick={onChangeVoteOne}>Vote</button>
          </div>
          OR
          <div>
            <p>{optionTwoText}</p>
            <button onClick={onChangeVoteTwo}>Vote</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>{optionOneText}</p>
            <p>
              Votes: {optionOneVotes.length} -{" "}
              {calculatePercent(optionOneVotes.length, totalVotes)} %
            </p>
          </div>
          <div>
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
