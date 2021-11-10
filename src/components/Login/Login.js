import "./Login.css";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const users = ["user 1", "user 2", "user 3"];

export const Login = ({ setSession }) => {
  const [value, setValue] = useState("");

  const isAuth = () => {
    if (users.includes(value)) {
      return setSession(value);
    } else {
      return null;
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      isAuth();
    }
  };

  return (
    <div className="login">
      <h1>Sign in</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            label="Login"
            onInput={(e) => setValue(e.target.value)}
            autoFocus={true}
          />
          <TextField
            required
            label="Password"
            type="password"
            onKeyPress={handlePressInput}
          />
        </div>
        <Button fullWidth={true} variant="contained" onClick={isAuth}>
          Sign in
        </Button>
      </Box>
    </div>
  );
};
