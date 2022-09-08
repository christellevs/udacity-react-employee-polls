import { connect } from "react-redux";

const Poll = (props) => {
  console.log(props);
  return <div>Poll</div>;
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Poll);
