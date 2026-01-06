import React from "react";
import styles from "./Search.module.css";

export default function Search({ placeholder }) {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
      />

      <div className={styles.divider}></div>

      <div className={styles.iconBox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="6" />
          <line x1="13" y1="13" x2="17" y2="17" />
        </svg>
      </div>
    </div>
  );
}
