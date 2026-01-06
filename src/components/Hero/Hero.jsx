import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>100 Thousand Songs, ad-free</h1>
          <p>Over thousands podcast episodes</p>
        </div>

        <img
          src={headphones}
          alt="Headphones"
          className={styles.image}
        />
      </div>
    </section>
  );
}
