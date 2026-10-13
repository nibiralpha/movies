"use client";
import React, { useEffect } from "react";
import styles from "./Details.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import MediaComponent from "@/src/app/Components/MediaComponent/MediaComponent";
import VideosComponent from "@/src/app/Components/VideosComponent/VideosComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import CastComponent from "@/src/app/Components/CastComponent/CastComponent";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { selectMovieDetailPageData } from "@Selectors/movieDetailSelectors";
import {
  fetchMovieDetails,
  fetchMoviePhotos,
  fetchMovieVideos,
} from "@/src/app/Services/Movies";

export default function Detail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  // const { getValue, setValue, removeValue } = useLocalStorage();

  const {
    movieDetail,
    movieDetailLoading,
    casts,
    videos,
    videosLoading,
    photos,
    photosLoading,
  } = useSelector(selectMovieDetailPageData);

  const getInitData = async (): Promise<void> => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieVideos(id));
    dispatch(fetchMoviePhotos(id));
  };

  useEffect(() => {
    // console.log("movieDetail changed", movieDetail.id);
    // if (!movieDetail.id) return;
    // saveDataToLocalStorage();
  }, [movieDetail.id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  // useEffect(() => {
  //   return () => {
  //     dispatch(resetState());
  //   };
  // }, [dispatch]);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent
        type="movie"
        id={id}
        data={movieDetail}
        loading={movieDetailLoading}
      />
      <MediaComponent
        key={id}
        type="movie"
        id={id}
        data={movieDetail}
        videos={videos?.results}
        loading={movieDetailLoading}
      />
      <VideosComponent loading={videosLoading} videos={videos?.results} />
      <PhotosComponent
        photos={photos?.backdrops}
        loading={movieDetailLoading}
      />

      <CastComponent type="movies" casts={casts} loading={movieDetailLoading} />

      {/* <div className={`container`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
        <SwiperComponent
          shoeDetail={false}
          slidesPerView={6}
          spaceBetween={15}
        />
      </div> */}
    </div>
  );
}
