"use client";

import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { CastMember } from "@app-types/MovieDetails";
import styles from "./Cast.module.css";
import { CreditsCastMember } from "@app-types/TvSeries";
import { CelebrityWorkInterface, CelebrityWorks } from "@app-types//Celebrity";
import { useState } from "react";

interface MovieTableComponentProps {
  id: number;
  // data: CelebrityWorkInterface;
  data: CelebrityWorks[];
  title: string;
  type: "cast" | "crew";
}

export default function MovieTableComponent({
  id,
  data,
  title,
  type,
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
            {data.slice(0, showDefault).map((castData) => {
              {
                return (
                  <div key={castData.id} className="col-12 col-md-2">
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
                        <div className={styles.cast_name}>
                          {castData.original_title}
                        </div>
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
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
