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
        <div className={styles.title}>Recommended</div>
        <SwiperComponent slidesPerView={6} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Streming</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Celebrity</div>
        <CelebrityComponent slidesPerView={6} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Upcoming</div>
        <SwiperComponent slidesPerView={6} spaceBetween={15} />
      </div>
    </div>
  );
}
