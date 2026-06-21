import { Celebrity } from "./Celebrity";

export interface CelebritiesInterface {
  treandingCelebrities?: CelebrityStateInterface
  populerCelebrities?: CelebrityStateInterface
//   topRatedTvShows?: MovieStateInterface
}

export interface CelebrityStateInterface {
  list: Celebrity[];
  // loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
