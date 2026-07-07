"use client";
import React, { useEffect } from "react";
import styles from "./Celebrity.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";

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

  const { celebrityDetail, celebLoading } = useSelector((state: RootState) => ({
    celebrityDetail:
      state.celebrity.celebrityDetail?.details ||
      ({} as CelebrityDetailResponse),
    celebLoading:
      state.celebrity.celebrityDetail === undefined
        ? true
        : state.celebrity.celebrityDetail.loading,
  }));

  const { photos, loading: photoLoading } = useSelector((state: RootState) => ({
    photos: state.photos.data || {},
    loading: state.photos.loading,
  }));

  const { celebrityWorks, loading: celebrityWorksLoading } = useSelector(
    (state: RootState) => ({
      celebrityWorks: state.celebrity.works || { id: 0, crew: [], cast: [] },
      loading: state.celebrity.works?.loading,
    }),
  );

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
        data={celebrityDetail}
      />
      <CelebrityMediaComponent id={id} data={celebrityDetail} loading={celebLoading}/>
      <PhotosComponent loading={photoLoading} photos={photos?.profiles} />

      <MovieTableComponent
        title="Worked on as Cast"
        type="cast"
        id={id}
        data={celebrityWorks.cast}
        loading={celebLoading}
      />
      <MovieTableComponent
        title="Worked on as Crew"
        type="crew"
        id={id}
        data={celebrityWorks.crew}
        loading={celebLoading}
      />

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
