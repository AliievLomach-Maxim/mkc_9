import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterSlice'
import { balanceReducer } from './balanceSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'todo',
  storage,
}

const balancePersistConfig = {
  key: 'balance',
  storage,
  // blacklist: ['secretKey'],
  whitelist: ['publicKey'],
}

const todoPersistedReducer = persistReducer(persistConfig, todoReducer)
const balancePersistedReducer = persistReducer(balancePersistConfig, balanceReducer)

const rootReducer = {
  balance: balancePersistedReducer,
  counter: counterReducer,
  todo: todoPersistedReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)
// import { combineReducers, createStore } from 'redux'
// import { counterReducer } from './counterSlice'
// import { balanceReducer } from './balanceSlice'
// import { configureStore } from '@reduxjs/toolkit'
// import { todoReducer } from './todoSlice'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'todo',
//   storage,
// }

// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   counter: counterReducer,
//   todo: todoReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store)
