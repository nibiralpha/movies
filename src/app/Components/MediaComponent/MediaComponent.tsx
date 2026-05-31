import styles from "./Media.module.css";

export default function MediaComponent() {
  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          <img className={styles.img} width={"270px"} src={"/sinner.jpg"} />
        </div>
        <div className={styles.right_video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.detail_area}>
        <div className={styles.details}>
          Trying to leave their troubled lives behind, twin brothers return to
          their hometown to start again, only to discover that an even greater
          evil is waiting to welcome them back.
        </div>
        <div className={styles.writers}>
          <div className={styles.writers_name}>
            <div className={styles.position}>Director</div>
            <div className={styles.name}>Ryan Coogler</div>
          </div>
          <div className={styles.writers_name}>
            <div className={styles.position}>Writer</div>
            <div className={styles.name}>Ryan Coogler</div>
          </div>
          <div className={styles.writers_name}>
            <div className={styles.position}>Stars</div>
            <div className={styles.name}>
              <div className={styles.stars}>
                <div className={styles.star}>Ryan Coogler</div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.stars}>
                <div className={styles.star}>Ryan Coogler</div>
                <div className={styles.dot}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
