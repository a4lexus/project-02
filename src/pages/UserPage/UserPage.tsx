import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types/User";
import UserCard from "../../components/UserCard/UserCard";

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

  return <div>{user ? <UserCard user={user} /> : null}</div>;
}
