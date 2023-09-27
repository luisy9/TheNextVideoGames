import { createSlice } from '@reduxjs/toolkit';

export const videoGamesSlice = createSlice({
  name: 'videoGames',
  initialState: {
    videoGames: {},
    errorMessage: undefined,
  },
  reducers: {
    onVideoGames: (state, { payload }) => {
      state.videoGames = payload;
      state.errorMessage = undefined;
    },
  },
});
export const { onVideoGames } = videoGamesSlice.actions;
