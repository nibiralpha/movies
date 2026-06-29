"use client";

import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
import { CreditsCastMember } from "@app-types/TvSeries";

// type MoviesTableProps = MovieCastProps | TvShowCastProps;

export default function MovieTableComponent({}) {
  // export default function MovieTableComponent({ casts }) {
  return (
    <div className="container">
      <div className={styles.cast_section}>
        <h2>Worked On</h2>
        <div className={styles.table}>
          <div className="row">
            {/* {casts.slice(0, 30).map((cast) => { */}
            {/* return ( */}
            <div key={11} className="col-12 col-md-2">
              <div className={styles.celeb_cast}>
                <div className={styles.celeb_cast_img}>
                  {/* <img
                        className={styles.avater}
                        src={
                          cast.profile_path == null
                            ? "/blank_celebrity.jpg"
                            : `${TMDB_IMAGE_BASE}/${cast.profile_path}`
                        }
                        alt={"cast.name"}
                      /> */}
                  <img className={styles.avater} src={"/gameofhero.webp"} alt={"cast.name"} />
                </div>
                <div className={styles.cast_content}>
                  <div className={styles.cast_name}>Json</div>
                  <div className={styles.detail}>Json tuck</div>
                  <div className={styles.detail}>Movie</div>
                </div>
              </div>
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
