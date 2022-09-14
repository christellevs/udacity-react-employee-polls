import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthorisedRoute = (props) => {
  const location = useLocation();

  return props.isAuthorised === true ? (
    props.children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  isAuthorised: authedUser ? true : false,
});
export default connect(mapStateToProps)(AuthorisedRoute);
