import { connect } from "react-redux";

const Leaderboard = (props) => {
  console.log("leaderbaord", props);
  return (
    <div>
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.name} <img src={user.avatarURL} alt="User Avatar URL" />
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
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
