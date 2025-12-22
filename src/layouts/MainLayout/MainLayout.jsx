import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
