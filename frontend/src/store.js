import { configureStore } from '@reduxjs/toolkit'
import CardSearchSlice from './slices/CardSearchSlice'

export const store = configureStore({
  reducer: {
    CardSearch: CardSearchSlice,
  },
})