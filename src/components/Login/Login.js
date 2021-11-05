import "./Login.css";
import { useState } from "react";
import { users } from "../Route";

export const Login = () => {
  const [value, setValue] = useState("");
  const [session, setSession] = useState(null);

  const isAuth = () => {
    if (users.includes(value)) {
      return setSession(value);
    } else {
      return null;
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <h2>Enter username</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={value}
          onInput={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={isAuth}>Log in</button>
      </div>
    </div>
  );
};
