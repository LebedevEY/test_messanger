import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Login,
  PrivateRoute,
  Home,
  PublicRoute,
  Chat,
  Profile,
} from "./components";
import "./index.css";
import { Switch } from "react-router";

function Index() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <PublicRoute exact={true} path="/" component={() => <Home />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/chat" component={() => <Chat />} />
          <Route path="/profile" component={() => <Profile />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
