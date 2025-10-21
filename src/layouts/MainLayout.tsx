import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.h2}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        Copyright ©2025 All Rights Reserved.
      </footer>
    </>
  );
}
