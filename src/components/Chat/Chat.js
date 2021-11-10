import "./Chat.css";
import { Message } from "./Message";
import { nanoid } from "nanoid";
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../../store/Chat";

export const Chat = ({ user }) => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => {
    return state.chat.messages;
  });

  const handleSendMessage = () => {
    if (value) {
      dispatch(sendMessage({ message: value, author: user }));
      setValue("");
    }
  };
  const [value, setValue] = useState("");

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      handleSendMessage();
    }
  };

  const log = () => {
    console.log(messages);
  };

  return (
    <div className="chat">
      <h1>Chat</h1>
      <div className="message_list">
        {messages.map((message) => (
          <Message key={nanoid()} {...message} />
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
          onClick={log}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
