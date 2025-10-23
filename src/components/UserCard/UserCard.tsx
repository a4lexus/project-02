import { Link } from "react-router-dom";
import type { User } from "../../types/User";

interface Props {
  user: User;
}

export default function UserCard({user}:Props) {
  return (
    <li>
      <Link to={`/users/${user.id}`}></Link>
      <h3>{user.name}</h3>
      <img src={user.avatar} alt={user.name} width={"200px"}/>
      <p>{user.email}</p>
    </li>
  );
}
