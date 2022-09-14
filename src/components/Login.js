import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser.js";

const Login = (props) => {
  const [selectedUser, setSelectedUser] = useState("none");
  const navigate = useNavigate();
  // const { state } = useLocation();
  // console.log("path hist", state?.previousPath);

  const onChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(selectedUser));
    navigate(-1);
  };

  return (
    <div className="login-container">
      <h2>Employee Web Polls</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <h3>Please select a user:</h3>
          <select
            className="login-input"
            defaultValue={"none"}
            onChange={onChange}
          >
            <option value="none" disabled>
              Select user...
            </option>
            {props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-login"
          disabled={selectedUser === "none" ? true : false}
        >
          Login
        </button>
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
