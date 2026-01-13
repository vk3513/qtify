import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({
  title,
  data,
  type = "album",
  hideToggle = false,
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {!hideToggle && (
          <button
            className={styles.toggleBtn}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show all"}
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            followers={item.follows}
            likes={item.likes}
            type={type}
          />
        ))}
      </div>
    </section>
  );
}
