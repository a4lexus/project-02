import { useState, useEffect } from "react";
import type { User } from "../types/User";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!res.ok) {
        throw new Error("Failed with status: " + res.status);
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, message, loading };
}
