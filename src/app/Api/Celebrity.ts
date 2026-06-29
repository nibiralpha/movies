import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { apiClient } from "@Api/Client";
import {
  CelebrityDetailResponse,
  CelebrityResponse,
} from "@app-types/Celebrity";
import { CelebrityPhotosResponse } from "@app-types/Photos";
import { CelebrityMoviesResponse } from "@app-types/MoviesForCelebrity";

const getTrendingCelebrities = async (): Promise<
  AxiosResponse<CelebrityResponse>
> => {
  const response = await apiClient.get<CelebrityResponse>(
    `${BASEURL}/trending/person/week`,
  );
  return response;
};

const getPopulerCelebrities = async (): Promise<
  AxiosResponse<CelebrityResponse>
> => {
  const response = await apiClient.get<CelebrityResponse>(
    `${BASEURL}/person/popular`,
  );
  return response;
};

const getCelebrityDetail = async (
  id: number,
): Promise<AxiosResponse<CelebrityDetailResponse>> => {
  const response = await apiClient.get<CelebrityDetailResponse>(
    `${BASEURL}/person/${id}`,
  );
  return response;
};

const getCelebrityPhotos = async (
  id: number,
): Promise<AxiosResponse<CelebrityPhotosResponse>> => {
  const response = await apiClient.get<CelebrityPhotosResponse>(
    `${BASEURL}/person/${id}/images`,
  );
  return response;
};

const getCelebrityMovies = async (
  id: number,
): Promise<AxiosResponse<CelebrityMoviesResponse>> => {
  const response = await apiClient.get<CelebrityMoviesResponse>(
    `${BASEURL}/person/${id}/combined_credits`,
  );
  return response;
};

export {
  getTrendingCelebrities,
  getPopulerCelebrities,
  getCelebrityDetail,
  getCelebrityPhotos,
  getCelebrityMovies
};
