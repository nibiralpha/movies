import styles from "./Videos.module.css";

export default function VideosComponent() {
  return (
    <div className="container">
      <div className={styles.video_section}>
        <div className={styles.videos}>Videos</div>
        <div className={styles.main}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>Official trailer</div>
            </div>

            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>Official trailer</div>
            </div>

            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>Official trailer</div>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>Sinners</div>
            </div>

            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>
                Oscars 2026 Best Picture Nominees
              </div>
            </div>

            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>Exclusive clips</div>
            </div>

            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className={styles.description}>
                Sinners: We Got Us A Problem
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
