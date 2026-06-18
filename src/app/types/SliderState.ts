import { MovieResult } from "./TopUpComingMovies";

export interface SliderState {
  list: MovieResult[];
  loading: boolean;
  error: boolean;
  errorResponse: object;
}
