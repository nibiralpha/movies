"use client";

import styles from "./Swiper.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@Components/Button/ButtonComponent";
import { MovieResult } from "@app-types/TopUpComingMovies";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import MoviesSkeleton from "@/src/app/Skeleton/MovieSkeleton/MoviesSkeleton";

import Image from "next/image";
import Link from "next/link";
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

  const renderItems = loading
    ? Array.from({ length: 6 }).map((_, i) => ({ id: i }))
    : data;

  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          430: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: slidesPerView },
        }}
      >
        {renderItems?.map((movie, index) => (
          <SwiperSlide
            key={loading ? `skeleton-${index}` : (movie as MovieResult).id}
          >
            <div className={styles.card}>
              {loading ? (
                <>
                  <div className={styles.slide_image_wrapper}>
                    <MoviesSkeleton height="100%" borderRadius="8px 8px 0 0" />
                  </div>
                  {shoeDetail && (
                    <div className={styles.bottom_aria}>
                      <MoviesSkeleton height="40px" borderRadius="4px" />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className={styles.slide_image_wrapper}>
                    <Link
                      href={
                        type === "movie"
                          ? `/details/${movie.id}`
                          : `/series/details/${movie.id}`
                      }
                    >
                      <Image
                        src={`${TMDB_IMAGE_BASE}/${(movie as MovieResult).backdrop_path}`}
                        className={styles.slide_image}
                        alt={`${movie.id}`}
                        fill
                        sizes="(max-width: 430px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 300px"
                      />
                    </Link>
                  </div>
                  {shoeDetail && (
                    <div className={styles.bottom_aria}>
                      <div className={styles.content}>
                        <div className={styles.start_icon}>
                          {/* <img width="14px" src={"./star.svg"} alt="star" /> */}
                          <Image
                            width={14}
                            height={14}
                            src="/star.svg"
                            alt="Star"
                          />
                        </div>
                        <div className={styles.rating}>
                          {(movie as MovieResult).vote_average
                            ? (movie as MovieResult).vote_average
                                .toString()
                                .slice(0, 3)
                            : "0"}
                        </div>
                      </div>
                      <div className={styles.title}>
                        {(movie as MovieResult).title ||
                          (movie as MovieResult).name}
                      </div>
                      <Link
                        href={
                          type === "movie"
                            ? `/details/${movie.id}`
                            : `/series/details/${movie.id}`
                        }
                      >
                        <Button
                          className="full_width"
                          text="View Now"
                          icon={true}
                        />
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
