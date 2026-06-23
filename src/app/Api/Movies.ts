import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TopUpComingMovies } from "@app-types/TopUpComingMovies";
import { apiClient } from "@Api/Client";
import { MovieDetails } from "@app-types/MovieDetails";
import { VideosResponse } from "@app-types/Videos";

const getTopUpComingMovies = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/upcoming?page=${page}`,
  );
  return response;
};

const getTrendingThisWeek = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/trending/all/week?page=${page}`,
  );
  return response;
};

const getNowPlaying = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/now_playing?page=${page}`,
  );
  return response;
};

const getPopulerMovies = async (
  page: number = 1,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/popular?page=${page}`,
  );
  return response;
};

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

const getMovieDetails = async (
  id: number,
): Promise<AxiosResponse<MovieDetails>> => {
  const response = await apiClient.get<MovieDetails>(
    `${BASEURL}/movie/${id}?append_to_response=credits`,
  );
  return response;
};

const getTvSeriesDetails = async (
  id: number,
): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/tv/${id}`,
  );
  return response;
};

const getMovieVideos = async (
  id: number,
): Promise<AxiosResponse<VideosResponse>> => {
  const response = await apiClient.get<VideosResponse>(
    `${BASEURL}/movie/${id}/videos`,
  );
  return response;
};

export {
  getTopUpComingMovies,
  getTrendingThisWeek,
  getNowPlaying,
  getPopulerMovies,
  getPopulerTvShows,
  getTopRatedTvShows,
  getMovieDetails,
  getTvSeriesDetails,
  getMovieVideos
};
