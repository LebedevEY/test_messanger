import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, PrivateRoute, Home, PublicRoute } from "./components";
import "./index.css";
import "./App.css";
import { Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute exact={true} path="/" component={() => <Home />} />
          <Route path="/login" component={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
