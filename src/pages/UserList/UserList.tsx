import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../../types/User";

export default function UsersList() {
  const [users, setUser] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const arr = await res.json();
    setUser(arr);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      UsersList
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <br />
            <img src={user.avatar} alt={user.email}  width={"200px"}/> <br />
            <Link to={`/users/${user.id}`}>To user</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
