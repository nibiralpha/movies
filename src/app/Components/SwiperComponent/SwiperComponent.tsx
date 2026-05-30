"use client";

import styles from "./Swiper.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <Swiper slidesPerView={4} spaceBetween={25} className="mySwiper">
      <SwiperSlide>
        <div className={styles.slideImageWrapper}>
          <img
            src="./the-crew-portrait.webp"
            className={styles.slideImage}
            alt="The Crew"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideImageWrapper}>
          <img
            src="./how-to-tame_a-dragon-portrait.webp"
            className={styles.slideImage}
            alt="How to Train Your Dragon"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideImageWrapper}>
          <img
            src="./the-first-of-us-portrait-1.webp"
            className={styles.slideImage}
            alt="The First of Us"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideImageWrapper}>
          <img
            src="./migration-portrait-.webp"
            className={styles.slideImage}
            alt="Migration"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideImageWrapper}>
          <img
            src="./tianic.webp"
            className={styles.slideImage}
            alt="Titanic"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
