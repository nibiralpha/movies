export interface BaseKnownFor {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface KnownForMovie extends BaseKnownFor {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
  softcore?: boolean;
}

export interface KnownForTv extends BaseKnownFor {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

export type KnownForItem = KnownForMovie | KnownForTv;

export interface SearchPersonResult {
  adult: boolean;
  id: number;
  name: string | undefined; //for person, for tv series
  original_name: string | undefined; //for person, for tv series
  title: string | undefined; //for movie
  original_title: string | undefined; //for movie
  media_type: "movie" | "tv" | "person";
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  poster_path: string | null;
  known_for: KnownForItem[];
}

export interface TmdbSearchResponse {
  page: number;
  results: SearchPersonResult[];
  total_pages: number;
  total_results: number;
}
