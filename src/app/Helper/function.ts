import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import { VideoInterface } from "@app-types/Videos";

type ThumbnailQuality = "high" | "medium" | "default";

export const formatRuntime = (totalMinutes: number | null): string => {
  if (!totalMinutes || totalMinutes <= 0) return "N/A";

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Handles cases where there are 0 hours (e.g., short films)
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

export const getOfficialVideo = (videos: VideoInterface[]) => {
  console.log(videos);

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

export const generateEmbedUrl = (id: string): string => {
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
