import clsx from 'clsx'
import styles from './Title.module.css'
import { AiFillTrophy } from 'react-icons/ai'

const Title = ({ children, color }) => {
  const colorSelector = color === 'red' ? styles.red : styles.green

  return (
    <div className={clsx(styles.title, colorSelector)}>
      <AiFillTrophy className={styles.icon} />
      {children}
    </div>
  )
}

export default Title
