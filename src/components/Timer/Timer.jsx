import { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [counter, setCounter] = useState(0)
  const idRef = useRef()
  useEffect(() => {
    idRef.current = setInterval(() => {
      console.log('interval', Date.now())
    }, 1000)
    // unmounting >>>
    return () => {
      clearInterval(idRef.current)
    }
  }, [])

  const handleClick = () => {
    console.log('idRef.current', idRef.current)
    clearInterval(idRef.current)
  }

  return (
    <div>
      <h1>Timer</h1>
      <button onClick={handleClick}>Clear timer</button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default Timer
