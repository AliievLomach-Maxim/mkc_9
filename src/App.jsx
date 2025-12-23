import { Link, NavLink, Route, Routes } from 'react-router'
// import HomePage from './pages/HomePage/HomePage'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
// import ArticlesDetailsPage from './pages/ArticlesDetailsPage/ArticlesDetailsPage'
// import MainLayout from './layouts/MainLayout/MainLayout'
import { lazy, Suspense } from 'react'

const ArticlesDetailsPage = lazy(() => import('./pages/ArticlesDetailsPage/ArticlesDetailsPage'))
const ArticlesPage = lazy(() => import('./pages/ArticlesPage/ArticlesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MainLayout = lazy(() => import('./layouts/MainLayout/MainLayout'))

const App = () => {
  return (
    <>
      <Suspense fallback={<p>LOADING...</p>}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/articles' element={<ArticlesPage />}></Route>
            <Route path='/articles/details/:id' element={<ArticlesDetailsPage />} />
          </Route>
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
