import "./Home.css";
import { users } from "../Login";

export const Home = () => {
  return (
    <div className="home">
      <h1>Список пользователей:</h1>
      {users.map((user) => (
        <ul className="user_list">
          <li className="user">{user}</li>
        </ul>
      ))}
    </div>
  );
};
