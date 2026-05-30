import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderComponent() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div className={styles.container}>
          <img className={styles.slider_img} src={"./gameofhero.webp"} />
          <div className={styles.content}>
            <div className={styles.title}>Kung Fu Panda</div>
            <div className={styles.desc}>
              Game of Heros is an action-packed fantasy epic where the fate of
              the world is decided in a battle of legendary warriors. When an
              ancient prophecy foretells an all-out war between the greatest
              heroes of all realms, champions from different eras and dimensions
              are summoned to fight for ultimate supremacy. Each warrior
              possesses unique abilities, weapons, and a past that drives them
              to victory—or doom.
            </div>
            <div className={styles.footer}>
              <div className={styles.button}>
                <div className={styles.icon}>
                  <img src={"./play-xxl.png"} width={15} />
                </div>
                <div className={styles.text}>Play Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <img className={styles.slider_img} src={"./gameofhero.webp"} />
          <div className={styles.content}>
            <div className={styles.title}>Game of throne</div>
            <div className={styles.desc}>
              Game of Heros is an action-packed fantasy epic where the fate of
              the world is decided in a battle of legendary warriors. When an
              ancient prophecy foretells an all-out war between the greatest
              heroes of all realms, champions from different eras and dimensions
              are summoned to fight for ultimate supremacy. Each warrior
              possesses unique abilities, weapons, and a past that drives them
              to victory—or doom.
            </div>
            <div className={styles.footer}>
              <div className={styles.button}>
                <div className={styles.icon}>
                  <img src={"./play-xxl.png"} width={15} />
                </div>
                <div className={styles.text}>Play Now</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
