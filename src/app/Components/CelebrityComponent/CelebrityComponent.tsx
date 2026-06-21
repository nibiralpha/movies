"use client";

import styles from "./Celebrity.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Celebrity } from "@app-types/Celebrity";
import { TMDB_IMAGE_BASE } from "../../Constant/ApiDataHelper";
interface CelebrityComponentProps {
  slidesPerView: number;
  spaceBetween: number;
  data: Celebrity[];
}

export default function CelebrityComponent({
  slidesPerView,
  spaceBetween,
  data,
}: Readonly<CelebrityComponentProps>) {
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
      {data?.map((celebrity) => (
        <SwiperSlide key={celebrity.id}>
          <div className={styles.card}>
            <div className={styles.slide_image_wrapper}>
              <img
                src={celebrity.profile_path !== null ? `${TMDB_IMAGE_BASE}/${celebrity.profile_path}` : `/blank_celebrity.jpg`}
                className={styles.slide_image}
                alt={celebrity.name}
              />

              <div className={styles.overlay}></div>
            </div>

            <div className={styles.name}>{celebrity.name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
