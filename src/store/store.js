import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../components/screens/home/homeSlice'
import paymentSlice from '../components/screens/payment/paymentSlice'

export const store = configureStore({
  reducer: {
    user : homeSlice,
    payment: paymentSlice
  }
})