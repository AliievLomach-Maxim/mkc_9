import styles from './Wrapper.module.css'
import clsx from 'clsx'
import { AiFillTrophy } from 'react-icons/ai'

const Wrapper = ({ children }) => {
  // const isOnline = false
  // const classNames = [styles.container, styles.main, styles.main2].join(' ')
  return (
    // <div style={{ backgroundColor: 'red' }}>
    // <div className='container main'>
    // <div className={`${styles.container} ${isOnline ? styles.main : ''} ${styles.main2}`}>
    <div className={clsx(styles.container)}>
      {children}
      <br />
      Wrapper
    </div>
  )
}

export default Wrapper

// const div = document.querySelector('div')
// div.style.backgroundColor =
