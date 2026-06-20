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

export { getTopUpComingMovies, getTrendingThisWeek };
