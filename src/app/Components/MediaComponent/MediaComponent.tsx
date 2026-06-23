import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import styles from "./Media.module.css";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useEffect, useState } from "react";
interface HeaderComponentProps {
  id: number;
  data: MovieDetails;
}
export default function MediaComponent({
  id,
  data,
}: Readonly<HeaderComponentProps>) {
  const [directorsData, setDirectorsData] = useState<string[]>([]);
  const [producerData, setProducerData] = useState<string[]>([]);
  const [writerData, setWriterData] = useState<string[]>([]);

  const getMembers = (role: CrewRole): string[] => {
    const directors = data?.credits?.crew
      .filter((member: CrewMember) => member.job === role)
      .map((director: CrewMember) => director.name);

    return directors ?? [];
  };

  useEffect(() => {
    const director = getMembers("Director");
    const producer = getMembers("Producer");
    const writer = getMembers("Writer");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDirectorsData(director);
    setProducerData(producer);
    setWriterData(writer);
  }, [data]);

  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          <img
            className={styles.img}
            width={"270px"}
            src={`${TMDB_IMAGE_BASE}/${data.poster_path}`}
          />
        </div>
        <div className={styles.right_video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bKGxHflevuk?si=EVaSGzF8btOeCG6z"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.detail_area}>
        <div className={styles.details}>{data.overview}</div>
        <div className={styles.writers}>
          <div className={styles.writers_name}>
            <div className={styles.position}>Director</div>
            <div className={styles.name}>{directorsData.join(", ")}</div>
          </div>
          <div className={styles.writers_name}>
            <div className={styles.position}>Producers</div>
            <div className={styles.name}>{producerData.join(", ")}</div>
          </div>
          <div className={styles.writers_name}>
            <div className={styles.position}>Writers</div>
            <div className={styles.name}>{writerData.join(", ")}</div>
            {/* <div className={styles.name}> */}
              {/* <div className={styles.stars}>
                <div className={styles.star}>Ryan Coogler</div>
                <div className={styles.dot}></div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
