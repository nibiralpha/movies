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
import { fetchMovieDetails, fetchMoviePhotos, fetchMovieVideos } from "@/src/app/Services/Movies";


export default function SeriesDetail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const movieDetail = useSelector(
    (state: RootState) => state.movieDetail.data || {},
  );
  
  const casts = useSelector(
    (state: RootState) => state.movieDetail.data.credits?.cast || [],
  );

  const videos = useSelector(
    (state: RootState) => state.videos.data || {},
  );
  
  const photos = useSelector(
    (state: RootState) => state.photos.data || {},
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieVideos(id));
    dispatch(fetchMoviePhotos(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);
  

  return (
    <div>
      <MenuComponent />
      <HeaderComponent id={id} data={movieDetail} />
      <MediaComponent id={id} data={movieDetail} videos={videos?.results}/>
      <VideosComponent videos={videos?.results}/>
      <PhotosComponent photos={photos?.backdrops}/>
      <CastComponent casts={casts}/>
      <div className={`container`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
        {/* <SwiperComponent
          shoeDetail={false}
          slidesPerView={6}
          spaceBetween={15}
        /> */}
      </div>
    </div>
  );
}
