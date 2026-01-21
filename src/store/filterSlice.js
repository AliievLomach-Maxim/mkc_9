import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    text: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.text = payload
    },
  },
})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions

export const selectFilterText = (state) => state.filters.text
