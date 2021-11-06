import "./Profile.css";

export const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <h2>
        Текущий пользователь: <span style={{ color: "red" }}>{user}</span>
      </h2>
    </div>
  );
};
