import { NavLink } from "react-router-dom";
import { ROUTES as R } from "../../constants/routes";
import s from "./Header.module.css";

const getClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? s.activeLink : s.link;
export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={R.HOME} className={getClass}>
          Home
        </NavLink>
        <NavLink to={R.RANDOM_JOKE} className={getClass}>
          Random Joke
        </NavLink>
        <NavLink to={R.SPACE_MISSION} className={getClass}>
          Space Mission
        </NavLink>
        <NavLink to={R.GENDER_REVEAL} className={getClass}>
          Gender Reveal
        </NavLink>
        <NavLink to={R.COHORT_68} className={getClass}>
          Cohort68
        </NavLink>
        <NavLink to={R.ABOUT} className={getClass}>
          About
        </NavLink>
        <NavLink to={R.CONTACT} className={getClass}>
          Contact
        </NavLink>
        <NavLink to={R.ACCOUNT} className={getClass}>
          Account
        </NavLink>
        <NavLink to="/products" className={getClass}>
          Products
        </NavLink>
        <NavLink to={R.USERS} className={getClass}>
          Users
        </NavLink>
      </nav>
    </header>
  );
}
