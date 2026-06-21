export interface CelebrityResponse {
  page: number;
  results: Celebrity[];
  total_pages: number;
  total_results: number;
}

export interface Celebrity {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: "person" | "movie" | "tv";
  popularity: number;
  gender: number; 
  known_for_department: string;
  profile_path: string | null;
}
