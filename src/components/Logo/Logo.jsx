import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="QTify Logo" />
    </div>
  );
}

export default Logo;
