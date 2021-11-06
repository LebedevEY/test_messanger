import "./Chat.css";
import { Message } from "./Message";

export const Chat = ({ user }) => {
  const message = [
    { author: user, message: "test" },
    { author: user, message: "test 2" },
  ];
  return (
    <div className="chat">
      <h1>Chat</h1>
      <div className="message_list">
        {message.map((message) => (
          <Message message={message} />
        ))}
      </div>
      <div className="message_form">
        <input type="text" />
        <button>send</button>
      </div>
    </div>
  );
};
