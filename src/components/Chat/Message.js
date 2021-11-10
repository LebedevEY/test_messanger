import "./Chat.css";

export const Message = ({ message, author }) => {
  return (
    <div className="message">
      <h3 className="message_text">{message}</h3>
      <p style={{ color: "black" }}>{author}</p>
    </div>
  );
};
