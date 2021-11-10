import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
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
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

function App() {
  const [session, setSession] = useState(null);

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
          <PrivateRoute
            isAut={session}
            exact={true}
            path="/"
            component={() => <Home />}
          />
          <PublicRoute
            isAut={session}
            path="/login"
            component={() => <Login setSession={setSession} />}
          />
          <PrivateRoute
            isAut={session}
            path="/chat"
            component={() => <Chat user={session} />}
          />
          <PrivateRoute
            isAut={session}
            path="/profile"
            component={() => <Profile user={session} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);
