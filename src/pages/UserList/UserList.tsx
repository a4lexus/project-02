import UserCard from "../../components/UserCard/UserCard";
import useUsers from "../../hooks/useUsers";

export default function UsersList() {
  const { users, message, loading } = useUsers();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (message) {
    return <p>{message}</p>;
  }

  return (
    <div>
      UsersList
      <ul>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
