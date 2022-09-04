import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">New Poll</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <span>Username</span>
      <Link to="/login">
        <button>Logout</button>
      </Link>
    </nav>
  );
};

export default Navbar;
