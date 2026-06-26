"use client";

import { TMDB_IMAGE_BASE, TMDB_IMAGE_BASE_URL } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
interface CastProps {
  casts: CastMember[];
}
export default function CastComponent({ casts }: CastProps) {
  return (
    <div className="container">
      <div className={styles.cast_section}>
        <h2>Cast</h2>
        <div className={styles.table}>
          <div className="row">
            {casts.slice(0, 30).map((cast) => {
              return (
                <div key={cast.id} className="col-12 col-md-4">
                  <div className={styles.cast}>
                    <div className={styles.cast_img}>
                      <img
                        className={styles.avater}
                        src={cast.profile_path == null ? '/blank_celebrity.jpg' : `${TMDB_IMAGE_BASE}/${cast.profile_path}`}
                        alt={cast.name}
                      />
                    </div>
                    <div className={styles.cast_content}>
                      <div className={styles.cast_name}>{cast.name}</div>
                      <div className={styles.detail}>{cast.job}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
