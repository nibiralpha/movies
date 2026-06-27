import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import { VideoInterface } from "@app-types/Videos";
import { TMDB_IMAGE_BASE, TMDB_IMAGE_BASE_URL } from "@Constant/ApiDataHelper";
import { CreditsCrewMember, TvShowDetailsResponse } from "../types/TvSeries";

type ThumbnailQuality = "high" | "medium" | "default";

export const formatRuntime = (totalMinutes: number | null): string => {
  if (!totalMinutes || totalMinutes <= 0) return "N/A";

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  return `${hours}h ${minutes}m`;
};

export const getMembers = (role: CrewRole, data: MovieDetails): string[] => {
  const directors = data?.credits?.crew
    .filter((member: CrewMember) => member.job === role)
    .map((director: CrewMember) => director.name);

  return directors ?? [];
};

export const getTvSeriesMembers = (role: CrewRole, data: TvShowDetailsResponse): string[] => {
  const directors = data?.credits?.crew
    .filter((member: CreditsCrewMember) => member.job === role)
    .map((director: CreditsCrewMember) => director.name);

  return directors ?? [];
};

export const getOfficialVideo = (videos: VideoInterface[]) => {
  const officialTrailer = videos.find(
    (video) =>
      video.official === true &&
      video.type === "Trailer" &&
      video.site === "YouTube",
  );

  const anyTrailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  const finalVideo = officialTrailer || anyTrailer;

  return finalVideo ? finalVideo : null;
};

export const generateVideoEmbedUrl = (id: string): string => {
  return `https://www.youtube.com/embed/${id}`;
};

export const generateImageUrl = (
  id: string,
  thumbQuality: ThumbnailQuality,
): string => {
  let fileType = "default.jpg";

  if (thumbQuality === "high") {
    fileType = "hqdefault.jpg";
  } else if (thumbQuality === "medium") {
    fileType = "mqdefault.jpg";
  }

  return `https://img.youtube.com/vi/${id}/${fileType}`;
};

export const generateImageData = (
  filePath: string | null,
  size: "w300" | "w500" | "w1280" | "original" = "w1280",
): string => {

  return `${TMDB_IMAGE_BASE_URL}${size}${filePath}`;
};
