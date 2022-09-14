import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { handleInitialData } from "./actions/shared.js";
import AuthorisedRoute from "./components/AuthorisedRoute";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import Leaderboard from "./components/Leaderboard.js";
import PollPage from "./components/PollPage.js";
import NewPoll from "./components/NewPoll.js";
import Login from "./components/Login.js";
import Error404Page from "./components/Error404Page.js";
import LoadingBar from "react-redux-loading-bar";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <LoadingBar />
      <div>
        {props.authedUser ? <Navbar /> : <></>}
        <Routes>
          <Route
            path="/"
            element={
              <AuthorisedRoute>
                <Dashboard />
              </AuthorisedRoute>
            }
          />
          <Route
            exact
            path="/add"
            element={
              <AuthorisedRoute>
                <NewPoll />
              </AuthorisedRoute>
            }
          />
          <Route
            exact
            path="/leaderboard"
            element={
              <AuthorisedRoute>
                <Leaderboard />
              </AuthorisedRoute>
            }
          />
          <Route
            exact
            path="/questions/:id"
            element={
              <AuthorisedRoute>
                <PollPage />
              </AuthorisedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<Error404Page />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser ? true : false,
});

export default connect(mapStateToProps)(App);
