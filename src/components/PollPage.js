import { useState } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  const [optionOneVoteDisable, setOptionOneVoteDisable] = useState(false);
  const [optionTwoVoteDisable, setOptionTwoVoteDisable] = useState(false);
  const [vote, setVote] = useState(null);

  const { name, avatar, timestamp, optionOneText, optionTwoText, isAnswered } =
    props.question;

  const onChangeVoteOne = (e) => {
    e.preventDefault();
    setOptionTwoVoteDisable(true);
    setVote(1);
  };

  const onChangeVoteTwo = (e) => {
    e.preventDefault();
    setOptionOneVoteDisable(true);
    setVote(2);
  };

  return (
    <div>
      <div>
        <h3>
          Poll by {name} at {timestamp}
        </h3>
        <img src={avatar} alt="Poll Author Avatar" />
        <h3>Would you rather?</h3>
      </div>
      {!vote ? (
        <div>
          <div>
            <p>{optionOneText}</p>
            <button onClick={onChangeVoteOne} disabled={optionOneVoteDisable}>
              Vote
            </button>
          </div>
          OR
          <div>
            <p>{optionTwoText}</p>
            <button onClick={onChangeVoteTwo} disabled={optionTwoVoteDisable}>
              Vote
            </button>
          </div>
        </div>
      ) : (
        <div>Question Answered!</div>
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
