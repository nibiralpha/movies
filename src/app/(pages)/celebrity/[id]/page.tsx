"use client";
import React, { useEffect } from "react";
import styles from "./Celebrity.module.css";

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
import { fetchCelebrityDetails, fetchCelebrityPhotos } from "@/src/app/Services/Celebrity";
import { CelebrityDetailResponse } from "@/src/app/types/Celebrity";
import CelebrityMediaComponent from "@/src/app/Components/MediaComponent/CelebrityMediaComponent";

export default function Celebrity() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const celebrityDetail = useSelector(
    (state: RootState) =>
      state.celebrity.celebrityDetail?.details ||
      ({} as CelebrityDetailResponse),
  );

  const casts = useSelector(
    (state: RootState) => state.movieDetail.data.credits?.cast || [],
  );

  const photos = useSelector((state: RootState) => state.photos.data || []);

  const getInitData = async (): Promise<void> => {
    dispatch(fetchCelebrityDetails(id));
    dispatch(fetchCelebrityPhotos(id));
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
      <HeaderComponent type="celebrity" id={id} data={celebrityDetail} />
      <CelebrityMediaComponent id={id} data={celebrityDetail}/>

      <PhotosComponent photos={photos?.profiles} />
      <CastComponent type="movies" casts={casts} />

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
