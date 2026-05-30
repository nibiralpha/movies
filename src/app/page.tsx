"use client";

import styles from "./page.module.css";

import MenuComponent from "./Components/MenuComponent/MenuComponent";
import SliderComponent from "./Components/SliderComponent/SliderComponent";
import SwiperComponent from "./Components/SwiperComponent/SwiperComponent";

export default function Page() {
  return (
    <div>
      <MenuComponent />
      <SliderComponent />
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Recommended</div>
        <SwiperComponent />
      </div>
    </div>
  );
}
