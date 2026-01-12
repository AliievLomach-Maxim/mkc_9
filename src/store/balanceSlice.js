const balanceInitialState = {
  value: 100,
  a: 1,
  b: 2,
}

export const balanceReducer = (state = balanceInitialState, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      }
    case 'balance/withdraw':
      return {
        ...state,
        value: state.value - action.payload,
      }

    default:
      return state
  }
}

export const deposit = (value) => ({
  type: 'balance/deposit',
  payload: value,
})
