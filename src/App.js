import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { handleInitialData } from "./actions/shared.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import Leaderboard from "./components/Leaderboard.js";
import NewPoll from "./components/NewPoll.js";
import Login from "./components/Login.js";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add" element={<NewPoll />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default connect()(App);
