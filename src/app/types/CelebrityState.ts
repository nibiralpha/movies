import { Celebrity } from "./Celebrity";

export interface CelebritiesInterface {
  treandingCelebrities?: CelebrityStateInterface
//   nowPlaying?: MovieStateInterface
//   populerMovies?: MovieStateInterface
//   populerTvShows?: MovieStateInterface
//   topRatedTvShows?: MovieStateInterface
}

export interface CelebrityStateInterface {
  list: Celebrity[];
  // loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
