import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={headphones} alt="Headphones" className={styles.image} />
    </section>
  );
}
