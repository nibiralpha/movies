"use client";

import styles from "./Celebrity.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CelebrityComponent() {
  return (
    <Swiper
      navigation={true}
      //   modules={[Navigation]}
      slidesPerView={6}
      spaceBetween={15}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />

            <div className={styles.overlay}></div>
          </div>

          <div className={styles.name}>The Crew Name</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
