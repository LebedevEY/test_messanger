import "./Home.css";
import { users } from "../Login";
import { nanoid } from "nanoid";

export const Home = () => {
  return (
    <div className="home">
      <h1>Список пользователей:</h1>
      <div className="user_list">
        {users.map((user) => (
          <p className="user" key={nanoid()}>
            {user}
          </p>
        ))}
      </div>
    </div>
  );
};
