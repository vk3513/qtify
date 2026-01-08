import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ title, albums }) {
  const [showAll, setShowAll] = useState(false);

  const visibleAlbums = showAll ? albums : albums.slice(0, 7);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show all"}
        </button>
      </div>

      <div className={styles.grid}>
        {visibleAlbums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            followers={album.follows}
          />
        ))}
      </div>
    </section>
  );
}
