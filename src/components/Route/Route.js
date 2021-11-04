import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ isAut, ...rest }) {
  return isAut ? <Route {...rest} /> : <Redirect to="/login" />;
}

export function PublicRoute({ isAut, ...rest }) {
  return !isAut ? <Route {...rest} /> : <Redirect to="/" />;
}
