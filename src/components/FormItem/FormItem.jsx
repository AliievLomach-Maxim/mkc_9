const FormItem = ({ handleChangeLang, lang }) => {
  //   const [value, setValue] = useState('en')

  const handleChange = (e) => {
    console.log('e.target.value', e.target.value)
    if (e.target.value.includes('@')) return
    handleChangeLang(e.target.value)
  }

  return (
    <select onChange={handleChange} value={lang}>
      <option value='ua'>UA</option>
      <option value='en'>EN</option>
    </select>
  )
}

export default FormItem

// import { useState } from 'react'

// const FormItem = () => {
//   const [value, setValue] = useState('')

//   const handleChange = (e) => {
//     console.log('e.target.value', e.target.value)
//     if (e.target.value.includes('@')) return
//     setValue(e.target.value)
//   }

//   console.log('value', value)

//   return <input type='text' onChange={handleChange} value={value} />
// }

// export default FormItem
