import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TopUpComingMovies } from "@app-types/TopUpComingMovies";
import { apiClient } from "@Api/Client";
import { TvShowDetailsResponse } from "@app-types/TvSeries";

const getPopulerTvShows = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/tv/popular?page=${page}`,
  );
  return response;
};

const getTopRatedTvShows = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/tv/top_rated?page=${page}`,
  );
  return response;
};

const getTvSeriesDetails = async (
  id: number,
): Promise<AxiosResponse<TvShowDetailsResponse>> => {
  const response = await apiClient.get<TvShowDetailsResponse>(
    `${BASEURL}/tv/${id}`,
  );
  return response;
};

export {
  getPopulerTvShows,
  getTopRatedTvShows,
  getTvSeriesDetails,
};
