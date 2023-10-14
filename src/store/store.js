import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Slices/auth/authSlice'
import { videoGamesSlice } from './Slices/videoGames/videoGamesSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    videoGames: videoGamesSlice.reducer
  }
})
