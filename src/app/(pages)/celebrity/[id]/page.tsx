"use client";
import React, { useEffect } from "react";
import styles from "./Celebrity.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { CelebrityDetailSelectors } from "@/src/app/Selectors/celebrityDetailSelectors";

import {
  fetchCelebrityDetails,
  fetchCelebrityPhotos,
  fetchCelebrityWorks,
} from "@/src/app/Services/Celebrity";
import { CelebrityDetailResponse } from "@/src/app/types/Celebrity";
import CelebrityMediaComponent from "@/src/app/Components/MediaComponent/CelebrityMediaComponent";
import MovieTableComponent from "@/src/app/Components/CastComponent/MovieTableComponent";

export default function Celebrity() {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch<AppDispatch>();

  const {
    celebrityDetail,
    celebLoading,
    photos,
    photoLoading,
    celebrityWorks,
    celebrityWorksLoading,
  } = useSelector(CelebrityDetailSelectors);

  const getInitData = async (): Promise<void> => {
    dispatch(fetchCelebrityDetails(id));
    dispatch(fetchCelebrityPhotos(id));
    dispatch(fetchCelebrityWorks(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent
        type="celebrity"
        id={id}
        loading={celebLoading}
        data={celebrityDetail || null}
      />
      <CelebrityMediaComponent
        id={id}
        data={celebrityDetail || null}
        loading={celebLoading}
      />
      <PhotosComponent loading={photoLoading} photos={photos?.profiles} />

      <MovieTableComponent
        title="Worked on"
        type="cast"
        id={id}
        data={celebrityWorks.cast}
        loading={celebLoading}
      />
      {/* <MovieTableComponent
        title="Worked on as Crew"
        type="crew"
        id={id}
        data={celebrityWorks.crew}
        loading={celebLoading}
      /> */}

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
