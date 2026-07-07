"use client";

import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
import { CreditsCastMember } from "@app-types/TvSeries";
import { CelebrityWorkInterface, CelebrityWorks } from "@app-types//Celebrity";
import { useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieTableComponentProps {
  id: number;
  // data: CelebrityWorkInterface;
  data: CelebrityWorks[];
  title: string;
  type: "cast" | "crew";
  loading: boolean;
}

export default function MovieTableComponent({
  id,
  data,
  title,
  type,
  loading,
}: Readonly<MovieTableComponentProps>) {
  const defaultValue = 10;
  const [showDefault, setShowDefault] = useState<number>(defaultValue);
  const [showAllButton, setShowAllButton] = useState<boolean>(true);

  const showAll = () => {
    setShowDefault(data.length - 1);
    setShowAllButton(false);
  };

  const hideAll = () => {
    setShowDefault(defaultValue);
    setShowAllButton(true);
  };

  return (
    <div className="container">
      <div className={styles.cast_section}>
        <div className={styles.header_area}>
          <div>
            <h2>{title}</h2>
          </div>
          <div
            onClick={showDefault > defaultValue ? hideAll : showAll}
            className={styles.show_all}
          >
            {showAllButton ? "Show All" : "Hide All"}
          </div>
        </div>
        <div className={styles.table}>
          <div className="row">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="col-12 col-md-2">
                  <div className={styles.celeb_cast}>
                    <div
                      className={styles.celeb_cast_img}
                      style={{ marginBottom: 0 }}
                    >
                      <Skeleton
                        width={80}
                        height={80}
                        borderRadius="10%"
                        containerClassName="block"
                      />
                    </div>

                    <div
                      className={styles.cast_content}
                      style={{ flex: 1, paddingLeft: "5px" }}
                    >
                      <Skeleton
                        width="30%"
                        height={11}
                        style={{ marginBottom: "4px" }}
                      />

                      <Skeleton width="20%" height={10} />
                      <Skeleton width="20%" height={10} />
                    </div>
                  </div>
                </div>
              ))
            ) : data.length === 0 ? (
              <div className="col-12 px-4">
                <div className="no-result">No results found</div>
              </div>
            ) : (
              data.slice(0, showDefault).map((castData, i) => {
                return (
                  <div key={`${castData.id}-${i}`} className="col-12 col-md-2">
                    <div className={styles.celeb_cast}>
                      <div className={styles.celeb_cast_img}>
                        <img
                          className={styles.avater}
                          src={
                            castData.poster_path == null
                              ? "/blank_celebrity.jpg"
                              : `${TMDB_IMAGE_BASE}/${castData.poster_path}`
                          }
                          alt={castData.title}
                        />
                      </div>
                      <div className={styles.cast_content}>
                        <div className={styles.cast_name}>{castData.title}</div>
                        <div className={styles.detail}>
                          {castData.character}
                        </div>
                        <div className={styles.detail}>
                          {castData.media_type == "movie" ? "Movie" : "TV show"}
                        </div>
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
