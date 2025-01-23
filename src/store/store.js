import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { setAuthData } from './authSlice'
import supplierSlice from './supplierSlice'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import staffSlice from './staffSlice'
import profileSlice from './profileSlice'

export const store = configureStore({
  reducer: {
    authData : AuthSlice,
    supplierData : supplierSlice,
    categoryData : categorySlice,
    productData : productSlice,
    staffData : staffSlice,
    profileData : profileSlice
  },
})