"use client";

import styles from "./Swiper.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button/ButtonComponent";
import { MovieResult } from "@app-types/TopUpComingMovies";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/navigation";

interface SwiperComponentProps {
  slidesPerView: number;
  spaceBetween: number;
  shoeDetail?: boolean;
  data: MovieResult[];
  type: "movie" | "tvshow";
  loading?: boolean;
}

export default function SwiperComponent({
  slidesPerView,
  spaceBetween,
  shoeDetail = true,
  data,
  type,
  loading,
}: Readonly<SwiperComponentProps>) {
  const router = useRouter();

  const changePage = (id: number) => {
    router.push("/details/" + id);
  };

  const changePageToTvShow = (id: number) => {
    router.push("/series/details/" + id);
  };  

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={styles.Skeleton_div}>
              <Skeleton height={270} />
              <Skeleton count={1} />
            </div>
          ))}
        </div>
      ) : (
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
                    onClick={() =>
                      type == "movie"
                        ? changePage(movie.id)
                        : changePageToTvShow(movie.id)
                    }
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
                    <div className={styles.title}>
                      {movie.title || movie.name}
                    </div>

                    <Button
                      onClick={() => changePage(movie.id)}
                      className="full_width"
                      text="View Now"
                      icon={true}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
