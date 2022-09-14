import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div>
      <h1>Error 404</h1>
      <h2> Page not Found!</h2>
      <button onClick={onClick} className="btn btn-login">
        Back to Login
      </button>
    </div>
  );
};

export default Error404Page;
