import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ image, title, followers, likes, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <Chip
          label={
            type === "song"
              ? `${likes} Likes`
              : `${followers} Follows`
          }
          size="small"
          className={styles.chip}
        />
      </div>

      <div className={styles.title}>{title}</div>
    </div>
  );
}
