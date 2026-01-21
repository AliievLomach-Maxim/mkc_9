import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('pending'),
        (state) => {
          state.loading = true
          state.error = false
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('rejected'),
        (state) => {
          state.loading = false
          state.error = true
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('fulfilled'),
        (state) => {
          state.loading = false
        },
      )
  },
})

export const rootReducer = rootSlice.reducer

export const selectLoading = (state) => state.root.loading
