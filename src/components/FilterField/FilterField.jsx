import { useDispatch, useSelector } from 'react-redux'
import { selectFilterText, setFilter } from '../../store/filterSlice'

const FilterField = () => {
  const value = useSelector(selectFilterText)
  // const A = useSelector(selectA)
  // const B = useSelector(selectB)

  // const total = A + B

  const dispatch = useDispatch()

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value))
  }

  return (
    <div>
      <label>
        Pls enter smth..
        <br />
        <input type='text' value={value} onChange={handleChange} placeholder='search...' />
      </label>
    </div>
  )
}

export default FilterField
