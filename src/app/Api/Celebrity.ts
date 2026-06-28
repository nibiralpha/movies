import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { apiClient } from "@Api/Client";
import { CelebrityDetailResponse, CelebrityResponse } from "@app-types/Celebrity";

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

export { getTrendingCelebrities, getPopulerCelebrities, getCelebrityDetail };
