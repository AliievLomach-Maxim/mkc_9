import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },
  reducers: {
    create: (state, { payload }) => {
      state.todo.push(payload)
    },
    edit: (state, { payload }) => {
      state.todo = state.todo.map((el) => (el.id === payload.id ? { ...el, ...payload } : el))
    },
    // payload its todo.id
    delete: (state, { payload }) => {
      return { ...state, todo: state.todo.filter((el) => el.id !== payload) }
    },
  },
})

export const todoReducer = todoSlice.reducer
export const { create } = todoSlice.actions
// import { createSlice } from '@reduxjs/toolkit'

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: {
//     todo: [],
//   },
//   reducers: {
//     create: (state, { payload }) => {
//       // return {
//       //   ...state,
//       //   todo: [...state.todo, payload],
//       // }
//       state.todo.push(payload)
//     },
//     edit: (state, { payload }) => {
//       // return {
//       //   ...state,
//       //   todo: state.todo.map((el) => {
//       //     if (el.id === payload.id) {
//       //       return { ...el, ...payload }
//       //     } else return el
//       //   }),
//       // }

//       state.todo = state.todo.map((el) => (el.id === payload.id ? { ...el, ...payload } : el))
//     },
//     // payload its todo.id
//     toggleStatus: (state, { payload }) => {
//       return {
//         ...state,
//         todo: state.todo.map((el) => {
//           if (el.id === payload) {
//             return { ...el, status: !el.status }
//           } else return el
//         }),
//       }
//     },
//     // payload its todo.id
//     delete: (state, { payload }) => {
//       return { ...state, todo: state.todo.filter((el) => el.id !== payload) }
//     },
//   },
// })

// export const todoReducer = todoSlice.reducer
// export const { create } = todoSlice.actions
