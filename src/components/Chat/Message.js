import classNames from "classnames";
import styles from "./message.module.css";

export const Message = ({ message, author, user }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.current_message]: author === user,
      })}
    >
      <h3 className="message_text">{message}</h3>
      <p style={{ color: "black" }}>{author}</p>
    </div>
  );
};
