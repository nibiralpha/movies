import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotoResponse } from "@app-types/Photos";

interface PhotoState {
  data: PhotoResponse;
  loading: boolean;
}

const initialState: PhotoState = {
  data: {
    id: 0,
    backdrops: [],
    logos: [],
    posters: [],
    profiles: []
  },
  loading: true,
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotoData: (state, action: PayloadAction<PhotoResponse>) => {
      return { ...state, data: action.payload };
    },
    setPhotoLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setPhotoData, setPhotoLoading } = photoSlice.actions;
export default photoSlice.reducer;
