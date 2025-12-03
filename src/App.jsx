import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'

const initialState = () => {
  const local = localStorage.getItem('counter')
  if (local) {
    const value = JSON.parse(local)
    return value
  }
  return 0
}

const App = () => {
  const [counter, setCounter] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Clicker {counter}</button>
      {/* <button onClick={() => setCounter2(counter2 + 1)}>Clicker 2 {counter2}</button> */}
      {/* <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'} Timer </button>
      {isShow && <Timer />} */}
    </div>
  )
}

export default App

// every update component
// useEffect(() => {
//   console.log('Effect')
// })

// only mounting
// useEffect(() => {
//   console.log('Effect')
// }, [])

// // only mounting & every update state "counter"
// useEffect(() => {
//   // if (!counter) return // for skip first render
//   console.log('Effect',counter)
// }, [counter])

// useEffect(() => {
//   console.log('counter', counter)
// }, [counter])
// useEffect(() => {
//   console.log('counter2', counter2)
// }, [counter2])
