"use client";

import styles from "./Cast.module.css";
// interface PhotoSliderFormat {
//   src: string;
//   height: number;
//   width: number;
// }

// interface PhotosComponentProps {
//   photos: PhotoInterface[];
// }
export default function CastComponent() {
  return (
    <div className="container">
      <div className={styles.cast_section}>
        <h2>Top Cast</h2>
        <div className={styles.table}>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className={styles.cast}>
                <div className={styles.cast_img}>
                  <img
                    className={styles.avater}
                    src={"/how-to-tame_a-dragon-portrait.webp"}
                  />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Sydney Sweeney</div>
                  <div className={styles.detail}>Millie Calloway</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={styles.cast}>
                <div className={styles.cast_img}>
                  <img
                    className={styles.avater}
                    src={"/how-to-tame_a-dragon-portrait.webp"}
                  />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Sydney Sweeney</div>
                  <div className={styles.detail}>Millie Calloway</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={styles.cast}>
                <div className={styles.cast_img}>
                  <img
                    className={styles.avater}
                    src={"/how-to-tame_a-dragon-portrait.webp"}
                  />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Sydney Sweeney</div>
                  <div className={styles.detail}>Millie Calloway</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={styles.cast}>
                <div className={styles.cast_img}>
                  <img
                    className={styles.avater}
                    src={"/how-to-tame_a-dragon-portrait.webp"}
                  />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Sydney Sweeney</div>
                  <div className={styles.detail}>Millie Calloway</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={styles.cast}>
                <div className={styles.cast_img}>
                  <img
                    className={styles.avater}
                    src={"/how-to-tame_a-dragon-portrait.webp"}
                  />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Sydney Sweeney</div>
                  <div className={styles.detail}>Millie Calloway</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
