import "./Chat.css";
import { Message } from "./Message";
import { nanoid } from "nanoid";
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export const Chat = ({ user }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);

  const sendMessage = () => {
    if (value) {
      setMessage([{ author: user, message: value }, ...message]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <h1>Chat</h1>
      <div className="message_list">
        {message.map((message) => (
          <Message key={nanoid()} message={message} />
        ))}
      </div>
      <div className="message_form">
        <Input
          fullWidth={true}
          autoFocus={true}
          placeholder="Ввелите сообщение..."
          onKeyPress={handlePressInput}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          size="medium"
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
