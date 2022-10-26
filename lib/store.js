import { configureStore } from '@reduxjs/toolkit'
import testimonialSlice from '../lib/TestimonialSlice'

export const store = configureStore({
  reducer: {
    testimonialSlice: testimonialSlice,
  },
})