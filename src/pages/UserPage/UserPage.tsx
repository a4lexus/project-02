import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types/User";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUserById(id: string) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUserById(id || "");
  }, [id]);

  return (
    <div>
      User Page
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <img src={user?.avatar}  width={"200px"}/>
      <p>{user?.role}</p>
    </div>
  );
}
