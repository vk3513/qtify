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
      {/* Header */}
      <div className={styles.header}>
        <h2>{title}</h2>

        {!hideToggle && (
          <span
            className={styles.toggle}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show all"}
          </span>
        )}
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
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
