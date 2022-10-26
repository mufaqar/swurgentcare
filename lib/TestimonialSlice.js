import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const testimonialSlice = createSlice({
  name: 'testimonialSlice',
  initialState,
  reducers: {
    valueChange: (state, action) => {
        state.value = action.payload
    },  
  },
})

// Action creators are generated for each case reducer function
export const { valueChange } = testimonialSlice.actions

export default testimonialSlice.reducer