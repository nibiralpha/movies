import { MovieResult } from "./TopUpComingMovies";

export interface MoviesInterface {
  treandingThisWeek: MovieStateInterface
}

export interface MovieStateInterface {
  list: MovieResult[];
  // loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
