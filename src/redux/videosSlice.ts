import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails, CastMember, CrewMember } from "@app-types/MovieDetails";
import { VideoInterface, VideosResponse } from "@app-types/Videos";

interface VideoState {
  data: VideosResponse;
  loading: boolean;
}

const initialState: VideoState = {
  data: {
    id: 0,
    results: [],
  },
  loading: true,
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideoData: (state, action: PayloadAction<VideosResponse>) => {
      return { ...state, data: action.payload };
    },
    setVideoLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setVideoData, setVideoLoading } = videosSlice.actions;
export default videosSlice.reducer;
