import "./Chat.css";

export const Message = ({ message }) => {
  return (
    <div className="message">
      <h3>{message.message}</h3>
      <p style={{ color: "black" }}>{message.author}</p>
    </div>
  );
};
