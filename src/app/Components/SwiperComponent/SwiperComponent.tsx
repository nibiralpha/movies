"use client";

import styles from "./Swiper.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button/ButtonComponent";

interface SwiperComponentProps {
  slidesPerView: number;
  spaceBetween: number;
  shoeDetail?: boolean;
}

export default function SwiperComponent({
  slidesPerView,
  spaceBetween,
  shoeDetail = true,
}: SwiperComponentProps) {
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
      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./the-crew-portrait.webp"
              className={styles.slide_image}
              alt="The Crew"
            />
          </div>

          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The Crew</div>
              {/* <div className={styles.trailer_button}>
                <img className={styles.play} src="./play-xxl.png" />
                <div className={styles.trailer}>Trailer</div>
              </div> */}
              <Button className="full_width" text="Trailer 1" icon={true} />
            </div>
          )}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./how-to-tame_a-dragon-portrait.webp"
              className={styles.slide_image}
              alt="how-to-tame_a-dragon-portrait"
            />
          </div>

          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>How To Train A Dragon</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./migration-portrait-.webp"
              className={styles.slide_image}
              alt="The Crew"
            />
          </div>

          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>Migration Portrait</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
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
          </div>
          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The First Of Us</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.card}>
          <div className={styles.slide_image_wrapper}>
            <img
              src="./tianic.webp"
              className={styles.slide_image}
              alt="The Crew"
            />
          </div>

          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The Titanic</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
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
          </div>
          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The First Of Us</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
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
          </div>
          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The First Of Us</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
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
          </div>
          {shoeDetail && (
            <div className={styles.bottom_aria}>
              <div className={styles.content}>
                <div className={styles.start_icon}>
                  <img width="14px" src={"./star.svg"} />
                </div>
                <div className={styles.rating}>7.5</div>
              </div>
              <div className={styles.title}>The First Of Us</div>
              <Button className="full_width" text="Trailer" icon={true} />
            </div>
          )}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
