import "./Home.css";

export function Home() {
  const users = ["user_1", "user_2", "user_3"];

  return (
    <div className="home">
      {users.map((user) => (
        <ul className="user_list">
          <li className="user">{user}</li>
        </ul>
      ))}
    </div>
  );
}
