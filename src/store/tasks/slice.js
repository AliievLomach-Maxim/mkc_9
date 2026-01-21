import { createSelector, createSlice } from '@reduxjs/toolkit'
import { createTaskThunk, deleteTaskThunk, getTaskThunk } from './thunks'
import { selectFilterText } from '../filterSlice'

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [],
  },
  reducers: {
    clearData: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTaskThunk.fulfilled, (state, action) => {
        state.task = action.payload
      })
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        state.task.push(action.payload)
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.task = state.task.filter((el) => el.id !== action.payload.id)
      })
  },
})
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTaskThunk.fulfilled, (state, action) => {
//         state.task = action.payload
//       })
//       .addCase(createTaskThunk.fulfilled, (state, action) => {
//         state.task.push(action.payload)
//       })
//       .addCase(deleteTaskThunk.fulfilled, (state, action) => {
//         state.task = state.task.filter((el) => el.id !== action.payload.id)
//       })
//       .addMatcher(
//         (action) => {
//           // if (action.type.startWith('task') && action.type.endsWith('pending')) return true
//           if (action.type.endsWith('pending')) return true
//           return false
//         },
//         (state) => {
//           state.loading = true
//           state.error = false
//         },
//       )
//       .addMatcher(
//         (action) => {
//           // if (action.type.endsWith('rejected')) return true
//           // return false
//           return action.type.endsWith('rejected')
//         },
//         (state) => {
//           state.loading = false
//           state.error = true
//         },
//       )
//       .addMatcher(
//         (action) => {
//           if (action.type.endsWith('fulfilled')) return true
//           return false
//         },
//         (state) => {
//           state.loading = false
//         },
//       )
//   },
// })

export const selectTasks = (state) => state.task.task
export const selectLoading = (state) => state.task.loading
export const selectError = (state) => state.task.error

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilterText],
  (tasks, filterValue) => {
    console.log('selectFilteredTasks working...')
    return tasks.filter((el) => el.text.toLowerCase().includes(filterValue.toLowerCase()))
  },
)

export const taskReducer = taskSlice.reducer
export const { clearData } = taskSlice.actions
// import { createSelector, createSlice } from '@reduxjs/toolkit'
// import { createTaskThunk, deleteTaskThunk, getTaskThunk } from './thunks'
// import { selectFilterText } from '../filterSlice'

// // tasks = [] > filtering..
// // get tasks >
// // loading > true > filtering..
// // loading > false > filtering..
// // tasks > [...] > filtering..

// const taskSlice = createSlice({
//   name: 'task',
//   initialState: {
//     task: [],
//     loading: false,
//     error: false,
//     a: 1,
//     b: 12,
//   },
//   reducers: {
//     clearData: () => {},
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTaskThunk.pending, (state) => {
//         state.error = false
//         state.loading = true
//       })
//       .addCase(getTaskThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.task = action.payload
//       })
//       .addCase(getTaskThunk.rejected, (state) => {
//         state.loading = false
//         state.error = true
//       })
//       .addCase(createTaskThunk.pending, (state) => {
//         state.error = false
//         state.loading = true
//       })
//       .addCase(createTaskThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.task.push(action.payload)
//       })
//       .addCase(createTaskThunk.rejected, (state) => {
//         state.loading = false
//         state.error = true
//       })
//       .addCase(deleteTaskThunk.pending, (state) => {
//         state.error = false
//         state.loading = true
//       })
//       .addCase(deleteTaskThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.task = state.task.filter((el) => el.id !== action.payload.id)
//       })
//       .addCase(deleteTaskThunk.rejected, (state) => {
//         state.loading = false
//         state.error = true
//       })
//   },
// })

// export const selectTasks = (state) => state.task.task
// export const selectLoading = (state) => state.task.loading
// export const selectError = (state) => state.task.error
// export const selectA = (state) => state.task.a
// export const selectB = (state) => state.task.b
// export const selectTotal = (state) => {
//   // const a = state.task.a
//   // const b = state.task.b
//   const a = selectA(state)
//   const b = selectB(state)
//   return a + b
// }

// // export const selectFilteredTasks = (state) => {
// //   console.log('selectFilteredTasks working...')
// //   const tasks = selectTasks(state)
// //   const filterValue = selectFilterText(state)

// //   return tasks.filter((el) => el.text.toLowerCase().includes(filterValue.toLowerCase()))
// // }

// export const selectFilteredTasks = createSelector(
//   [selectTasks, selectFilterText],
//   (tasks, filterValue) => {
//     console.log('selectFilteredTasks working...')
//     return tasks.filter((el) => el.text.toLowerCase().includes(filterValue.toLowerCase()))
//   },
// )

// export const taskReducer = taskSlice.reducer
// export const { clearData } = taskSlice.actions
