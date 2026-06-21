import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { apiClient } from "@Api/Client";
import { CelebrityResponse } from "@app-types/Celebrity";

const getTrendingCelebrities = async (
  page: number = 1,
): Promise<AxiosResponse<CelebrityResponse>> => {
  const response = await apiClient.get<CelebrityResponse>(
    `${BASEURL}/trending/person/week?page=${page}`,
  );
  return response;
};

export { getTrendingCelebrities };
