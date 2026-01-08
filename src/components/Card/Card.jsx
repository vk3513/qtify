import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, title, followers }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <Chip
          label={`${followers} Follows`}
          className={styles.chip}
          size="small"
        />
      </div>

      <div className={styles.title}>{title}</div>
    </div>
  );
}
