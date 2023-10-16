import { createSlice } from '@reduxjs/toolkit'

export const videoGamesSlice = createSlice({
  name: 'videoGames',
  initialState: {
    videoGames: {},
    newVideoGame: {
      id: null,
      name: '',
      price: null,
      amount: null
    },
    errorMessage: undefined
  },
  reducers: {
    onVideoGames: (state, { payload }) => {
      state.videoGames = payload
      state.errorMessage = undefined
    },
    newBuy: (state, { payload }) => {
      state.videoGames =  null ;
    }
  }
})
export const { onVideoGames, newBuy } = videoGamesSlice.actions
