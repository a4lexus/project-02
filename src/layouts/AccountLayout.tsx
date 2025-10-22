import { NavLink, Outlet } from "react-router-dom";
import { ROUTES as R } from "../constants/routes";


export default function AccountLayout() {
  return (
    <div>
      <nav>
        <NavLink to={R.PROFILE}>Profile</NavLink>
        <NavLink to={R.SETTINGS}>Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
