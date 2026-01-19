import { createSlice } from '@reduxjs/toolkit'
import { createTaskThunk, deleteTaskThunk, getTaskThunk } from './thunks'

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [],
    loading: false,
    error: false,
  },
  reducers: {
    clearData: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTaskThunk.pending, (state) => {
        state.error = false
        state.loading = true
      })
      .addCase(getTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        state.task = action.payload
      })
      .addCase(getTaskThunk.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(createTaskThunk.pending, (state) => {
        state.error = false
        state.loading = true
      })
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        state.task.push(action.payload)
      })
      .addCase(createTaskThunk.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(deleteTaskThunk.pending, (state) => {
        state.error = false
        state.loading = true
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        state.task = state.task.filter((el) => el.id !== action.payload.id)
      })
      .addCase(deleteTaskThunk.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const taskReducer = taskSlice.reducer
export const { clearData } = taskSlice.actions

// to Redux >  getTaskThunk.pending()
// call async....
// Promise > fulfilled > to Redux >  getTaskThunk.fulfilled(res.data)
// Promise > rejected > to Redux >  getTaskThunk.rejected()

// 1. true/false
// export const getTaskThunk = createAsyncThunk('task/get', async () => {
//   const res = await axios.get('/123123tasks')
//   return res.data
// })
// .addCase(getTaskThunk.rejected, (state) => {
//   state.loading = false
//   state.error = true
// })

// 2. default message
// export const getTaskThunk = createAsyncThunk('task/get', async () => {
//   const res = await axios.get('/123123tasks')
//   return res.data
// })
// .addCase(getTaskThunk.rejected, (state, { error }) => {
//   console.log('action.payload', error) !!!!!
//   state.loading = false
//   state.error = error
// })

// 3. api response
// export const getTaskThunk = createAsyncThunk('task/get', async (_, thunkAPI) => {
//   try {
//     const res = await axios.get('/123123tasks')
//     return res.data
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// })
// .addCase(getTaskThunk.rejected, (state, action) => {
//   state.loading = false
//   state.error = action.payload.response.data
// })
