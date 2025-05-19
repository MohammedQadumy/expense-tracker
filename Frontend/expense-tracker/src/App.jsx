import React from "react";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/signUp" exact element={<SignUp />}></Route>
          <Route path="/dashboard" exact element={<Home />}></Route>
          <Route path="/income" exact element={<Income />}></Route>
          <Route path="/expense" exact element={<Expense />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
