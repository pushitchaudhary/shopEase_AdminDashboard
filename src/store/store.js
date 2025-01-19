import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { setAuthData } from './ authSlice'
import supplierSlice from './supplierSlice'
import categorySlice from './categorySlice'

export const store = configureStore({
  reducer: {
    authData : AuthSlice,
    supplierData : supplierSlice,
    categoryData : categorySlice
  },
})