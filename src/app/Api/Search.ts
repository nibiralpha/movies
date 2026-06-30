import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { apiClient } from "@Api/Client";
import { TmdbSearchResponse } from "@app-types/Search";

const getSearchResults = async (
  search: string,
): Promise<AxiosResponse<TmdbSearchResponse>> => {
  const response = await apiClient.get<TmdbSearchResponse>(
    `${BASEURL}/search/multi?query=${search}`,
  );
  return response;
};

export { getSearchResults };
