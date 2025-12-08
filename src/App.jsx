import ControlForm from './components/ControlForm/ControlForm'

const App = () => {
  const createUser = (newUser) => {
    const recreatedUser = { ...newUser, phone: '123' }
    console.log('recreatedUser', recreatedUser)
  }
  return (
    <div>
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
      <ControlForm handleCreate={createUser} />
    </div>
  )
}

export default App
// import { useState } from 'react'
// import Form from './components/Form/Form'
// import FormItem from './components/FormItem/FormItem'

// const App = () => {
//   const [value, setValue] = useState('en')

//   const createUser = (newUser) => {
//     const recreatedUser = { ...newUser, phone: '123' }
//     console.log('recreatedUser', recreatedUser)
//   }
//   return (
//     <div>
//       <FormItem handleChangeLang={setValue} lang={value} />
//       <br />
//       <h1>{value === 'ua' ? 'Форма' : 'Form'}</h1>
//       <Form handleCreate={createUser} />
//       <br />
//       <h1>Form 2</h1>
//       <Form handleCreate={createUser} />
//       <br />
//     </div>
//   )
// }

// export default App
