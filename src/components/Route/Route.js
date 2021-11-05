import { Route, Redirect } from "react-router-dom";

export const users = ["user1", "user2", "user3"]

export function PrivateRoute({ isAut, ...rest }) {
  return isAut ? <Route {...rest} /> : <Redirect to="/login" />;
}

export function PublicRoute({ isAut, ...rest }) {
  return !isAut ? <Route {...rest} /> : <Redirect to="/" />;
}
