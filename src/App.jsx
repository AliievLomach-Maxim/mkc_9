import { Link, NavLink, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Header from './components/Header/Header'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import ArticlesDetailsPage from './pages/ArticlesDetailsPage/ArticlesDetailsPage'
import MainLayout from './layouts/MainLayout/MainLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/articles' element={<ArticlesPage />}></Route>
          <Route path='/articles/details/:id' element={<ArticlesDetailsPage />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
