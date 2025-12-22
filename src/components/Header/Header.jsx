import { Link, NavLink } from 'react-router'
import styles from './Header.module.css'
import clsx from 'clsx'

const getActiveClassNames = ({ isActive }) => clsx(isActive && styles.active)

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink className={getActiveClassNames} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassNames} to='/articles'>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassNames} to='/profile'>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
