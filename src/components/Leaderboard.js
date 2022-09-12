import { connect } from "react-redux";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.avatarURL}
                  alt="User Avatar URL"
                  className="leaderboard-table-avatar"
                />
                <p>{user.name}</p>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
              <td>
                {Object.keys(user.answers).length + user.questions.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  ),
});

export default connect(mapStateToProps)(Leaderboard);
