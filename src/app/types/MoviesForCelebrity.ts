export interface BaseCelebrityCredit {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  order?: number;
  character?: string;
  department?: string;
  job?: string;
}

export interface CelebrityMovieCredit extends BaseCelebrityCredit {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
  softcore?: boolean;
}

export interface CelebrityTvCredit extends BaseCelebrityCredit {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date: string; 
  origin_country: string[];
  episode_count?: number;
}

export type CelebrityCreditItem = CelebrityMovieCredit | CelebrityTvCredit;

export interface CelebrityMoviesResponse {
  id: number;
  cast: CelebrityCreditItem[];
  crew: CelebrityCreditItem[];
}
