import { useState } from 'react'

const Clicker = ({ value, handleClick }) => {
  const [value2, setValue2] = useState(0)

  const handleClick2 = () => {
    setValue2(value2 + 1)
    console.log('value2', value2)
  }
  return (
    <div>
      <h1>Clicker</h1>
      <h2>{value2}</h2>
      <button onClick={handleClick2}>Click me</button>
    </div>
  )
}

export default Clicker
// import { useState } from 'react'

// // let counter = 0
// // let counter;

// const Clicker = () => {
//   const [value, setValue] = useState(0)

//   console.log('value', value)

//   const handleClick = () => {
//     console.log('handleClick')
//     // value++
//     setValue(value + 1)
//     console.log('value', value)
//   }
//   return (
//     <div>
//       <h1>Clicker</h1>
//       <h2>{value}</h2>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )
// }

// export default Clicker
