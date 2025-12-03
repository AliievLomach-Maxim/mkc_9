import { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('interval', Date.now())
    }, 1000)
    // unmounting >>>
    return () => {
      clearInterval(id)
    }
  }, [])

  return <div>Timer</div>
}

export default Timer
