"use client";

import styles from "./RecentView.module.css";

import SwiperComponent from "@Components/SwiperComponent/SwiperComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { fetchTopRatedTvShows } from "@/src/app/Services/Movies";

export default function RecentViewComponent() {
  const dispatch = useDispatch<AppDispatch>();

  const topRatedTvShows = useSelector(
    (state: RootState) => state.movie.topRatedTvShows?.list || [],
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchTopRatedTvShows());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <div className={styles.title_area}>
        <div className={styles.title}>Recently viewed</div>
        <div className={styles.desc}>You have no recently viewed pages</div>
      </div>
      <SwiperComponent
        type="tvshow"
        data={topRatedTvShows}
        shoeDetail={true}
        slidesPerView={6}
        spaceBetween={15}
      />
    </div>
  );
}
