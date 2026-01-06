import styles from "./Card.module.css";

export default function Card({ image, title, followers }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p>{title}</p>
        {followers && <span>{followers} Followers</span>}
      </div>
    </div>
  );
}
