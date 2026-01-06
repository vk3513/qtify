import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.spacer}></div>

      <Search placeholder="Search a album of your choice" />

      <div className={styles.spacer}></div>

      <Button>Give Feedback</Button>
    </nav>
  );
}
