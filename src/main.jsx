import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalLoading from './components/GlobalLoading/GlobalLoading.jsx'

createRoot(document.getElementById('root')).render(
  // App > mount ? >unmount > web > mount
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalLoading />
        <App />
        <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
