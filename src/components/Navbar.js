import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-element">
        Home
      </Link>
      <Link to="/add" className="navbar-element">
        New Poll
      </Link>
      <Link to="/leaderboard" className="navbar-element">
        Leaderboard
      </Link>
      <span className="navbar-element navbar-user">
        <img className="navbar-user-img" src={props.user.avatarURL} />{" "}
        {props.user.name}
      </span>
      <Link to="/login" className="navbar-element">
        <button className="logout-button">Logout</button>
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
