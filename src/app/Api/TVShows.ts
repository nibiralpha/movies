import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TopUpComingMovies } from "@app-types/TopUpComingMovies";
import { apiClient } from "@Api/Client";
import { TvShowDetailsResponse } from "@app-types/TvSeries";
import { VideosResponse } from "../types/Videos";
import { PhotoResponse } from "../types/Photos";

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
    `${BASEURL}/tv/${id}?append_to_response=credits`,
  );
  return response;
};

const getTvShowsVideos = async (
  id: number,
): Promise<AxiosResponse<VideosResponse>> => {
  const response = await apiClient.get<VideosResponse>(
    `${BASEURL}/tv/${id}/videos`,
  );
  return response;
};

const getTvShowsPhotos = async (
  id: number,
): Promise<AxiosResponse<PhotoResponse>> => {
  const response = await apiClient.get<PhotoResponse>(
    `${BASEURL}/tv/${id}/images`,
  );
  return response;
};

export {
  getPopulerTvShows,
  getTopRatedTvShows,
  getTvSeriesDetails,
  getTvShowsVideos,
  getTvShowsPhotos
};
