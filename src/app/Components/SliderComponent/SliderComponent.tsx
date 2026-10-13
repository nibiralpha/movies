import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "@Components/Button/ButtonComponent";
import { SliderComponentProps } from "@app-types/SliderComponentProps";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SliderComponent({
  movies,
  loading,
}: Readonly<SliderComponentProps>) {
  const router = useRouter();

  const handleNavigation = (url: string | number) => {
    router.push(`/details/${url}`);
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    arrows: false,
  };

  const finalMovies = movies.slice(0, 8);

  if (loading) {
    return (
      <div className={styles.skeleton_container}>
        <div className={styles.skeleton_content}>
          <Image src="/loading.gif" alt="Loading" width={40} height={40} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {finalMovies.map((movie) => (
          <div key={movie.id} className={styles.container}>
            <Image
              className={styles.slider_img}
              src={`${TMDB_IMAGE_BASE}/${movie.backdrop_path}`}
              alt={movie.title || "Movie backdrop"}
              fill
              priority={movie.id === finalMovies[0]?.id}
              sizes="100vw"
            />
            <div className={styles.content}>
              <div className={styles.title}>{movie.title}</div>
              <div className={styles.desc}>{movie.overview}</div>
              <div className={styles.footer}>
                <Button
                  onClick={() => {
                    handleNavigation(movie.id);
                  }}
                  text={"View Now"}
                  icon={true}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
