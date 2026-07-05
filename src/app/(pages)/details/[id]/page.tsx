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
import { AppDispatch, RootState } from "@/src/redux/store";
import {
  fetchMovieDetails,
  fetchMoviePhotos,
  fetchMovieVideos,
} from "@/src/app/Services/Movies";
import { keyExists, loadData, saveData } from "@/src/app/Helper/localstorage";
import {
  localStorageName,
  TMDB_IMAGE_BASE,
  TMDB_IMAGE_BASE_URL,
} from "@/src/app/Constant/ApiDataHelper";
import { LocalStrorageData } from "@/src/app/types/Saved";
import { useLocalStorage } from "@/src/app/Hooks/useLocalStorage";
import { title } from "process";

export default function Detail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const { getValue, setValue, removeValue } = useLocalStorage();

  const movieDetail = useSelector(
    (state: RootState) => state.movieDetail.data || {},
  );

  const casts = useSelector(
    (state: RootState) => state.movieDetail.data.credits?.cast || [],
  );

  const videos = useSelector((state: RootState) => state.videos.data || {});

  const photos = useSelector((state: RootState) => state.photos.data || {});

  const getInitData = async (): Promise<void> => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieVideos(id));
    dispatch(fetchMoviePhotos(id));
  };

  // const saveDataToLocalStorage = () => {
  //   let data: LocalStrorageData[] = getValue(localStorageName);

  //   if (data == null) {
  //     data = [];
  //   }
  //   console.log("baaal", data);

  //   const alreadyExists = data.some((item) => item.id === id);

  //   console.log("alreadyExists", alreadyExists);

  //   if (alreadyExists) {
  //     const index = data.findIndex((item) => item.id === id);
  //     const [spliceData] = data.splice(index, 1);
  //     const insertData = data.splice(0, 0, spliceData);
  //     console.log("if condition", insertData);

  //     setValue(localStorageName, data);
  //   } else {
  //     const newData = [
  //       {
  //         id: movieDetail.id,
  //         title: movieDetail.title,
  //         image: `${TMDB_IMAGE_BASE_URL}${movieDetail.poster_path}`,
  //         type: "movie",
  //       },
  //       ...data,
  //     ];
  //     if (movieDetail.id !== 0) {
  //       console.log("else condition", movieDetail.id);
  //       setValue(localStorageName, newData);
  //     }
  //   }
  // };

  useEffect(() => {
    // console.log("movieDetail changed", movieDetail.id);
    // if (!movieDetail.id) return;
    // saveDataToLocalStorage();
  }, [movieDetail.id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent type="movie" id={id} data={movieDetail} />
      <MediaComponent
        type="movie"
        id={id}
        data={movieDetail}
        videos={videos?.results}
      />
      <VideosComponent videos={videos?.results} />
      <PhotosComponent photos={photos?.backdrops} />
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
