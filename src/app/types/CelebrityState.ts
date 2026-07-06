import { Celebrity, CelebrityDetailResponse, CelebrityWorkInterface } from "./Celebrity";

export interface CelebritiesInterface {
  treandingCelebrities?: CelebrityStateInterface
  populerCelebrities?: CelebrityStateInterface
  celebrityDetail?: CelebrityDetailInterface
  works?: CelebrityWorkInterface 
}

export interface CelebrityStateInterface {
  list: Celebrity[];
  loading: boolean;
  // error: boolean;
  // errorResponse: object;
}
export interface CelebrityDetailInterface {
  details: CelebrityDetailResponse | null;
  loading: boolean
}
