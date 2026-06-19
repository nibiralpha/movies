import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "@Components/Button/ButtonComponent";
import { SliderComponentProps } from "@app-types/SliderComponentProps";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";

export default function SliderComponent({
  movies,
}: Readonly<SliderComponentProps>) {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    arrows: false,
  };

  const finalMovies = movies.slice(0, 6);

  return (
    <>
      <Slider {...settings}>
        {finalMovies.map((movie) => (
          <div key={movie.id} className={styles.container}>
            <img
              className={styles.slider_img}
              src={`${TMDB_IMAGE_BASE}/${movie.backdrop_path}`}
            />
            <div className={styles.content}>
              <div className={styles.title}>{movie.title}</div>
              <div className={styles.desc}>{movie.overview}</div>
              <div className={styles.footer}>
                <Button text={"Play Now"} icon={true} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
