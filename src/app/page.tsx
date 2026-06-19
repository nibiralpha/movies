"use client";

import styles from "./page.module.css";

import MenuComponent from "@Components/MenuComponent/MenuComponent";
import SliderComponent from "@Components/SliderComponent/SliderComponent";
import SwiperComponent from "@Components/SwiperComponent/SwiperComponent";
import CelebrityComponent from "@Components/CelebrityComponent/CelebrityComponent";
import { useEffect, useState } from "react";
import useMovies from "@Hooks/useMovies";
import { TopUpComingMovies } from "@app-types/TopUpComingMovies";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { fetchSliderMovies } from "@Services/Home";
export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  const sliderMovies = useSelector((state: RootState) => state.slider.list);

  const getInitData = async (): Promise<void> => {
    dispatch(fetchSliderMovies());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <SliderComponent movies={sliderMovies}/>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Trending This Week</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Now Playing</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Movies</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Trending Celebrities</div>
        <CelebrityComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular TV Shows</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Upcoming Movies</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Top Rated TV Shows</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Celebrities</div>
        <CelebrityComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Viewed</div>
        <SwiperComponent
          shoeDetail={false}
          slidesPerView={6}
          spaceBetween={15}
        />
      </div>
    </div>
  );
}
