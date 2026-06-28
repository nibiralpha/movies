import { Celebrity, CelebrityDetailResponse } from "./Celebrity";

export interface CelebritiesInterface {
  treandingCelebrities?: CelebrityStateInterface
  populerCelebrities?: CelebrityStateInterface
  celebrityDetail?: CelebrityDetailInterface
//   topRatedTvShows?: MovieStateInterface
}

export interface CelebrityStateInterface {
  list: Celebrity[];
  // loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
export interface CelebrityDetailInterface {
  details: CelebrityDetailResponse | null;
}
