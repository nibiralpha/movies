export interface MovieDates {
  maximum: string;
  minimum: string;
}

export interface MovieResult {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  title: string;
  original_title: string;
  name: string;
  original_name: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  softcore?: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TopUpComingMovies {
  dates: MovieDates;
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}
