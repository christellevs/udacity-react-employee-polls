import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">New Poll</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <span>{props.user.name}</span>
      <Link to="/login">
        <button>Logout</button>
      </Link>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    user,
  };
};

export default connect(mapStateToProps)(Navbar);
