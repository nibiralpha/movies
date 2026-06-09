"use client";

import styles from "./page.module.css";

import MenuComponent from "./Components/MenuComponent/MenuComponent";
import SliderComponent from "./Components/SliderComponent/SliderComponent";
import SwiperComponent from "./Components/SwiperComponent/SwiperComponent";
import CelebrityComponent from "./Components/CelebrityComponent/CelebrityComponent";

export default function Page() {
  return (
    <div>
      <MenuComponent />
      <SliderComponent />
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
