import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const AuthorisedRoute = (props) => {
  console.log("auth route props: ", props);
  return props.authedUser ? props.children : <Navigate to={"/login"} />;
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser ? true : false,
});
export default connect(mapStateToProps)(AuthorisedRoute);
