import { createSlice } from '@reduxjs/toolkit'

const balanceInitialState = {
  value: 100,
  a: 1,
  b: 2,
  publicKey: 'asdasd',
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState: balanceInitialState,
  reducers: {
    deposit: (state, action) => {
      // return {
      //   ...state,
      //   value: state.value + action.payload,
      // }
      state.value = state.value + action.payload
    },
    withdraw: (state, action) => {
      return {
        ...state,
        value: state.value - action.payload,
      }
    },
  },
})

export const balanceReducer = balanceSlice.reducer
export const { deposit } = balanceSlice.actions

// export const balanceReducer = (state = balanceInitialState, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       }
//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       }

//     default:
//       return state
//   }
// }

// export const deposit = (value) => ({
//   type: 'balance/deposit',
//   payload: value,
// })
