import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";

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
