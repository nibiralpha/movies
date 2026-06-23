"use client";
import React, { useEffect } from "react";
import styles from "./Details.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import MediaComponent from "@/src/app/Components/MediaComponent/MediaComponent";
import VideosComponent from "@/src/app/Components/VideosComponent/VideosComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import { fetchMovieDetails } from "@/src/app/Services/Movies";

export default function Detail() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const movieDetail = useSelector(
    (state: RootState) => state.movieDetail.data || {},
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchMovieDetails(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);
  

  return (
    <div>
      <MenuComponent />
      <HeaderComponent id={id} data={movieDetail} />
      <MediaComponent id={id} data={movieDetail} />
      <VideosComponent />
      <PhotosComponent />
    </div>
  );
}
