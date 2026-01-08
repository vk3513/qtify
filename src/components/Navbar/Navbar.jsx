import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.center}>
        <Search placeholder="Search a song of your choice" />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
}
