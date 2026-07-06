"use client";

import styles from "./Celebrity.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Celebrity } from "@app-types/Celebrity";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/navigation";

interface CelebrityComponentProps {
  slidesPerView: number;
  spaceBetween: number;
  data: Celebrity[];
  loading: boolean;
}

export default function CelebrityComponent({
  slidesPerView,
  spaceBetween,
  data,
  loading,
}: Readonly<CelebrityComponentProps>) {
  const router = useRouter();

  const changePage = (id: number) => {
    router.push("/celebrity/" + id);
  };

  return (
    <div>
      {loading ? (
        <div className={styles.skeleton}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={styles.skeleton_content}>
              <Skeleton circle width={180} height={180} />
              <Skeleton width={100} />
              <Skeleton width={70} />
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
          {data?.map((celebrity) => (
            <SwiperSlide key={celebrity.id}>
              <div className={styles.card}>
                <div
                  onClick={() => changePage(celebrity.id)}
                  className={styles.slide_image_wrapper}
                >
                  <img
                    src={
                      celebrity.profile_path !== null
                        ? `${TMDB_IMAGE_BASE}/${celebrity.profile_path}`
                        : `/blank_celebrity.jpg`
                    }
                    className={styles.slide_image}
                    alt={celebrity.name}
                  />

                  <div className={styles.overlay}></div>
                </div>

                <div
                  onClick={() => changePage(celebrity.id)}
                  className={styles.name}
                >
                  {celebrity.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
