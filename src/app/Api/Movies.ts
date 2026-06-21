import axios, { AxiosResponse } from "axios";
import { BASEURL } from "../Constant/Api";
import { TopUpComingMovies } from "../types/TopUpComingMovies";
import { apiClient } from "@Api/Client"; 

const getTopUpComingMovies = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/upcoming?page=${page}`,
  );
  return response;
};

const getTrendingThisWeek = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/trending/all/week?page=${page}`,
  );
  return response;
};

const getNowPlaying = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/now_playing?page=${page}`,
  );
  return response;
};

const getPopulerMovies = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/movie/popular?page=${page}`,
  );
  return response;
};

const getPopulerTvShows = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies>> => {
  const response = await apiClient.get<TopUpComingMovies>(
    `${BASEURL}/tv/popular?page=${page}`,
  );
  return response;
};

export { getTopUpComingMovies, getTrendingThisWeek, getNowPlaying, getPopulerMovies, getPopulerTvShows };
