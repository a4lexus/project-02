import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={ROUTES.HOME} className={s.link}>
          Home
        </NavLink>
        <NavLink to={ROUTES.RANDOM_JOKE} className={s.link}>
          Random Joke
        </NavLink>
        <NavLink to={ROUTES.SPACE_MISSION} className={s.link}>
          Space Mission
        </NavLink>
        <NavLink to={ROUTES.GENDER_REVEAL} className={s.link}>
          Gender Reveal
        </NavLink>
        <NavLink to={ROUTES.COHORT_68} className={s.link}>
          Cohort68
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={s.link}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={s.link}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
