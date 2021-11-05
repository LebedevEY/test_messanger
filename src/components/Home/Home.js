import "./Home.css";
import { users } from "../Route";

export const Home = () => {
  return (
    <div className="home">
      {users.map((user) => (
        <ul className="user_list">
          <li className="user">{user}</li>
        </ul>
      ))}
    </div>
  );
};
