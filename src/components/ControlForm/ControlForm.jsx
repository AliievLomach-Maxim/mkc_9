import { useState } from 'react'

const defaultFormState = {
  firstName: '',
  lastName: '',
  country: 'ua',
}

const ControlForm = ({ handleCreate }) => {
  const [userFormState, setUserFormState] = useState(defaultFormState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('e', e)
    handleCreate(userFormState)
    // for reset
    setUserFormState(defaultFormState)
  }

  const handleChange = ({ target: { value, name } }) => {
    setUserFormState({
      ...userFormState,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <br />
        <input
          type='text'
          name='firstName'
          value={userFormState.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <br />
        <input type='text' name='lastName' value={userFormState.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Select your country:
        <br />
        <select name='country' value={userFormState.country} onChange={handleChange}>
          <option value='en'>EN</option>
          <option value='ua'>UA</option>
        </select>
      </label>
      <br />
      <button type='submit'>Create</button>
    </form>
  )
}

export default ControlForm

//   const handleChangeFN = ({ target: { value } }) => {
//     setUserFormState({
//       ...userFormState,
//       firstName: value,
//     })
//   }

//   const handleChangeLN = ({ target: { value } }) => {
//     setUserFormState({
//       ...userFormState,
//       lastName: value,
//     })
//   }

//   const handleChangeCountry = ({ target: { value } }) => {
//     setUserFormState({
//       ...userFormState,
//       country: value,
//     })
//   }
