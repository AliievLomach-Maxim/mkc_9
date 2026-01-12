const counterInitialState = {
  value: 0,
  a: 1,
  b: 2,
}

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + action.payload,
      }
    case 'counter/decrement':
      return {
        ...state,
        value: state.value - action.payload,
      }

    default:
      return state
  }
}

export const counterIncrement = (value) => ({
  type: 'counter/increment',
  payload: value,
})

export const counterDecrement = (value) => ({
  type: 'counter/decrement',
  payload: value,
})
