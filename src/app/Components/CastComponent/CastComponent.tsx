"use client";

import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
import { CreditsCastMember } from "@app-types/TvSeries";
import { useRouter } from "next/navigation";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// interface CastProps {
//   casts: CastMember[];
// }

interface MovieCastProps {
  type: "movies";
  casts: CastMember[];
  loading: boolean;
}
interface TvShowCastProps {
  type: "tvShow";
  casts: CreditsCastMember[];
  loading: boolean;
}

type CastComponentProps = MovieCastProps | TvShowCastProps;

export default function CastComponent({ casts, loading }: CastComponentProps) {
    const router = useRouter();
  
  const changePage = (id: number) => {
    router.push("/celebrity/" + id);
  };
  return (
    <div className="container">
      <div className={styles.cast_section}>
        <h2>Casts</h2>
        <div className={styles.table}>
          <div className="row">
            {loading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="col-12 col-md-2">
                  <div className={styles.top_movies}>
                    <div className={styles.cast_img}>
                      <Skeleton circle height={110} width={110} />
                    </div>
                    <div className={styles.cast_content}>
                      <Skeleton width="80%" height={16} />
                      <Skeleton width="60%" height={12} />
                    </div>
                  </div>
                </div>
              ))
            ) : casts.length === 0 ? (
              <p className={`${styles.no_data} ps-4`}>
                No data available to show.
              </p>
            ) : (
              casts.slice(0, 30).map((cast, i) => {
                return (
                  <div key={`${cast.id}-${cast.character}-${i}`} className="col-12 col-md-2">
                    <div className={styles.top_movies}>
                      <div onClick={() => changePage(cast.id)} className={styles.cast_img}>
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
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
