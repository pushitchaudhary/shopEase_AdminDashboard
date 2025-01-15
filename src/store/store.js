import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { setAuthData } from './ authSlice'
import supplierSlice from './supplierSlice'

export const store = configureStore({
  reducer: {
    authData : AuthSlice,
    supplierData : supplierSlice
  },
})