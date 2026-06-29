export interface CelebrityDetailResponse {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface CelebrityResponse {
  page: number;
  results: Celebrity[];
  total_pages: number;
  total_results: number;
}

export interface Celebrity {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: "person" | "movie" | "tv";
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
}

export interface CelebrityWorks {
  adult: boolean;
  backdrop_path: string | null;
  character: string;
  id: number;
  media_type: "movie" | "tv";
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface CelebrityWorkInterface {
  id: number;
  cast: CelebrityWorks[];
  crew: CelebrityWorks[];
}
