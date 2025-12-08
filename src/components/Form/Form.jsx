import { useId } from 'react'

const Form = ({ handleCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const res = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    }
    handleCreate(res)
    e.target.reset()
  }
  const firstNameId = useId()
  const lastNameId = useId()
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={firstNameId}>First Name:</label>
      <br />
      <input type='text' name='firstName' id={firstNameId} />
      <br />
      <br />
      <label htmlFor={lastNameId}>Last Name</label>
      <br />
      <input type='text' name='lastName' id={lastNameId} />
      <br />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
