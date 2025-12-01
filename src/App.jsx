import { useState } from 'react'
import Card from './components/Card/Card'
import Clicker from './components/Clicker/Clicker'

function App() {
  // const [value, setValue] = useState(0)
  // const handleClick = () => {
  //   setValue(value + 1)
  // }
  const [value, setValue] = useState({
    value1: 0,
    value2: 0,
  })

  const handleClick = (stateKey) => {
    setValue({
      ...value,
      [stateKey]: value[stateKey] + 1,
    })
  }

  const total = value.value1 + value.value2
  return (
    <>
      <Clicker value={value.value1} handleClick={() => handleClick('value1')} />
      <hr />
      <h1>Total: {total}</h1>
      <hr />
      <Clicker value={value.value2} handleClick={() => handleClick('value2')} />
    </>
  )
}

export default App
