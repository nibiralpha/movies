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
import { AppDispatch, RootState } from "@/src/redux/store";
import {
  fetchMovieDetails,
  fetchMoviePhotos,
  fetchMovieVideos,
} from "@/src/app/Services/Movies";
import { fetchTvSeriesDetails, fetchTvSeriesPhotos, fetchTvSeriesVideos } from "@/src/app/Services/Series";

export default function SeriesDetail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const tvShowDetail = useSelector(
    (state: RootState) => state.tvShowDetail.data || {},
  );

  const casts = useSelector(
    (state: RootState) => state.tvShowDetail.data.credits?.cast || [],
  );

  const videos = useSelector((state: RootState) => state.videos.data || {});

  const photos = useSelector((state: RootState) => state.photos.data || {});

  const getInitData = async (): Promise<void> => {
    dispatch(fetchTvSeriesDetails(id));
    dispatch(fetchTvSeriesVideos(id));
    dispatch(fetchTvSeriesPhotos(id));
    dispatch(fetchTvSeriesPhotos(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent type="tvShow" id={id} data={tvShowDetail} />
      {/* <HeaderComponent type="movie" id={id} data={movieDetail} /> */}
      {/* <MediaComponent id={id} data={movieDetail} videos={videos?.results}/> */}
      <MediaComponent
        type="tvShow"
        id={id}
        data={tvShowDetail}
        videos={videos?.results}
      />
      <VideosComponent videos={videos?.results} />
      <PhotosComponent photos={photos?.backdrops} />
      <CastComponent type="tvShow" casts={casts} />
      
      <div className={`container`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
      </div>
    </div>
  );
}
