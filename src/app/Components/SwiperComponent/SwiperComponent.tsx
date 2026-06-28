"use client";

import styles from "./Swiper.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button/ButtonComponent";
import { MovieResult } from "@app-types/TopUpComingMovies";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";

import { useRouter } from "next/navigation";

interface SwiperComponentProps {
  slidesPerView: number;
  spaceBetween: number;
  shoeDetail?: boolean;
  data: MovieResult[];
  type: "movie" | "tvshow";
}

export default function SwiperComponent({
  slidesPerView,
  spaceBetween,
  shoeDetail = true,
  data,
  type
}: Readonly<SwiperComponentProps>) {
  const router = useRouter();

  const changePage = (id: number) => {
    router.push("/details/" + id);
  };

  const changePageToTvShow = (id: number) => {
    router.push("/series/details/" + id);
  };

  return (
    <Swiper
      navigation={true}
      //   modules={[Navigation]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        430: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: slidesPerView,
        },
      }}
    >
      {data?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className={styles.card}>
            <div className={styles.slide_image_wrapper}>
              <img
                src={`${TMDB_IMAGE_BASE}/${movie.backdrop_path}`}
                className={styles.slide_image}
                alt={movie.title}
                onClick={() => type == "movie" ? changePage(movie.id) : changePageToTvShow(movie.id)}
              />
            </div>

            {shoeDetail && (
              <div className={styles.bottom_aria}>
                <div className={styles.content}>
                  <div className={styles.start_icon}>
                    <img width="14px" src={"./star.svg"} />
                  </div>
                  <div className={styles.rating}>
                    {movie.vote_average
                      ? movie.vote_average.toString().slice(0, 3)
                      : "0"}
                  </div>
                </div>
                <div className={styles.title}>{movie.title || movie.name}</div>

                <Button
                  onClick={() => changePage(movie.id)}
                  className="full_width"
                  text="Trailer 1"
                  icon={true}
                />
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
