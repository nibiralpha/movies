import axios, { AxiosResponse } from "axios";
import { BASEURL } from "../Constant/Api";
import { TopUpComingMovies } from "../types/TopUpComingMovies";
// import { Hero } from "../../Services/Heroes/HeroInterfaces";

const getTopUpComingMovies = async (page: number = 1): Promise<AxiosResponse<TopUpComingMovies[]>> => {
  const response = await axios.get<TopUpComingMovies[]>(
    `${BASEURL}/movie/upcoming?page=${page}`,
  );
  return response;
};

export { getTopUpComingMovies };
