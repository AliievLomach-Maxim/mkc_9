import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterSlice'
import { balanceReducer } from './balanceSlice'

// React component (Локальний стан)
// Створити компонент
// Оголосити стан (use State)
// Використати стан в компоненті (render)
// Створити ф-ю для оновлення стану (handleSmth)
// Викликати ф-ю оновлення стану
// ---

// Redux Store
// Створити store.
// Оголосити стан (store obj)
// Використати стан в компоненті (render)
// Створити ф-ю для оновлення стану (action)
// Викликати ф-ю оновлення стану (dispatch)

// const initialState = {
//   balance: {
//     value: 100,
//     a: 1,
//     b: 2,
//   },
//   counter: {
//     value: 0,
//     a: 1,
//     b: 2,
//   },
// }

const rootReducer = combineReducers({
  balance: balanceReducer,
  counter: counterReducer,
})

export const store = createStore(rootReducer)
