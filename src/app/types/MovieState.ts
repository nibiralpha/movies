import { MovieResult } from "./TopUpComingMovies";

export interface MoviesInterface {
  treandingThisWeek?: MovieStateInterface
  nowPlaying?: MovieStateInterface
  populerMovies?: MovieStateInterface
  populerTvShows?: MovieStateInterface
}

export interface MovieStateInterface {
  list: MovieResult[];
  // loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
