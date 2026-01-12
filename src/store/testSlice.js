const testInist = {
  value: 0,
}

export const testReducer = (state = testInist, action) => {
  switch (action.type) {
    case 'test/1':
      return {
        ...state,
        value: state.value + action.payload,
      }

    default:
      return state
  }
}

export const testAction = (value) => ({
  type: 'test/1',
  payload: value,
})
