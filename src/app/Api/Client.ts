import axios from "axios";
import { BASEURL } from "../Constant/Api";

const TOKEN = process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN;

export const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
  },
});
