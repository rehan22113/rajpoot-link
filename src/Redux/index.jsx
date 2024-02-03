import { configureStore } from '@reduxjs/toolkit'
import Login from './slice/LoginSlice'
import { MainApi } from './Api/MainApi'
import productSlice from './slice/productSlice'

export const store = configureStore({
  reducer: {
    login:Login,
    productfilter:productSlice,
    [MainApi.reducerPath]:MainApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainApi.middleware),
})