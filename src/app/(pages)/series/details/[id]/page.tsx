"use client";
import React, { useEffect } from "react";
import styles from "./Series.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import MediaComponent from "@/src/app/Components/MediaComponent/MediaComponent";
import VideosComponent from "@/src/app/Components/VideosComponent/VideosComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import CastComponent from "@/src/app/Components/CastComponent/CastComponent";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { selectTvShowDetailPageData } from "@Selectors/tvShowDetailSelectors";
import {
  fetchTvSeriesDetails,
  fetchTvSeriesPhotos,
  fetchTvSeriesVideos,
} from "@/src/app/Services/Series";

export default function SeriesDetail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const {
    tvShowDetail,
    tvShowDetailLoading,
    casts,
    videos,
    videosLoading,
    photos,
    photosLoading,
  } = useSelector(selectTvShowDetailPageData);

  const getInitData = async (): Promise<void> => {
    dispatch(fetchTvSeriesDetails(id));
    dispatch(fetchTvSeriesVideos(id));
    dispatch(fetchTvSeriesPhotos(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent
        loading={tvShowDetailLoading}
        type="tvShow"
        id={id}
        data={tvShowDetail}
      />
      <MediaComponent
        type="tvShow"
        id={id}
        data={tvShowDetail}
        videos={videos?.results}
        loading={tvShowDetailLoading}
      />
      <VideosComponent loading={videosLoading} videos={videos?.results} />
      <PhotosComponent loading={photosLoading} photos={photos?.backdrops} />
      <CastComponent
        loading={tvShowDetailLoading}
        type="tvShow"
        casts={casts}
      />

      {/* <div className={`container`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
      </div> */}
    </div>
  );
}
