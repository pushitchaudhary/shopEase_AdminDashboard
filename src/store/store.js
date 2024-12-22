import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { setAuthData } from './ authSlice'

export const store = configureStore({
  reducer: {
    authData : AuthSlice
  },
})