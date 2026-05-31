import styles from "./Header.module.css";

export default function HeaderComponent() {
  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <div className={styles.movie_title}>Sinners</div>
            <div className={styles.year_time}>
              <div className={styles.year}>2025</div>
              <div className={styles.dot}></div>
              <div className={styles.year}>2h 17m</div>
            </div>
          </div>
          <div className={styles.rating_area}>
            <div className={styles.star}>
              <img src={"/star.svg"} />
            </div>
            <div className={styles.rating}>7.5 / 10</div>
          </div>
        </div>
      </div>
    </>
  );
}
