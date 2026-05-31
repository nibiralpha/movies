import styles from "./Menu.module.css";

export default function MenuComponent() {
  return (
    <>
      <div className={styles.menu_container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={"/logo.png"} />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <div className={styles.menu_name}>Home</div>
              <div className={styles.icon}>{/* <img src={} /> */}</div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu_name}>Category</div>
              <div className={styles.icon}>{/* <img src={} /> */}</div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <div className={styles.icon}>
              <img src={"/search_icon.svg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
