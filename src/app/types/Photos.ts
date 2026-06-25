export interface PhotoInterface {
  aspect_ratio: number;
  height: number;
  iso_3166_1: string | null;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface PhotoResponse {
  backdrops: PhotoInterface[];
  logos: PhotoInterface[];
  posters: PhotoInterface[];
  id: number
}
