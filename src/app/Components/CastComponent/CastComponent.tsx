"use client";

import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
import { CreditsCastMember } from "@app-types/TvSeries";
// interface CastProps {
//   casts: CastMember[];
// }

interface MovieCastProps {
  type: "movies";
  casts: CastMember[];
}
interface TvShowCastProps {
  type: "tvShow";
  casts: CreditsCastMember[];
}

type CastComponentProps = MovieCastProps | TvShowCastProps;

export default function CastComponent({ casts }: CastComponentProps) {
  return (
    <div className="container">
      <div className={styles.cast_section}>
        <h2>Casts</h2>
        <div className={styles.table}>
          <div className="row">
            {casts.slice(0, 30).map((cast) => {
              return (
                <div key={cast.id} className="col-12 col-md-2">
                  <div className={styles.top_movies}>
                    <div className={styles.cast_img}>
                      <img
                        className={styles.avater}
                        src={
                          cast.profile_path == null
                            ? "/blank_celebrity.jpg"
                            : `${TMDB_IMAGE_BASE}/${cast.profile_path}`
                        }
                        alt={cast.name}
                      />
                    </div>
                    <div className={styles.cast_content}>
                      <div className={styles.cast_name}>{cast.name}</div>
                      <div className={styles.detail}>{cast.character}</div>
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
