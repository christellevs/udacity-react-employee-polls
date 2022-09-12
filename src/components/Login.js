import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser.js";

const Login = (props) => {
  const [selectedUser, setSelectedUser] = useState(props.users[0].id);
  console.log(props.authedUser);
  const onChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(selectedUser));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select value={selectedUser} onChange={onChange}>
          {props.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
