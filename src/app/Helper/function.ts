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

export const getTvSeriesMembers = (
  role: CrewRole,
  data: TvShowDetailsResponse,
): string[] => {
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

export const calculateAge = (birthdayString: string | null) => {
  if (!birthdayString) return "N/A";

  const birthDate = new Date(birthdayString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return `${age} years old`;
};

export const formatBirthday = (dateString: string | null) => {
  if (!dateString) return "N/A";
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function truncateDetails(
  text: string | null | undefined,
  characterLimit: number = 150,
): string {
  if (!text) return "No details available.";
  if (text.length <= characterLimit) return text;

  return `${text.slice(0, characterLimit).trim()}...`;
}

export const getGender = (value: number): string => {
  if (value == 1) return "Female";
  if (value == 2) return "Male";
  if (value == 3) return "Non-binary";
  else return "Not specified";
};
