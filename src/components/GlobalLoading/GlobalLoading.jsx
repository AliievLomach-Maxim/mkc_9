import { useSelector } from 'react-redux'
import { selectLoading } from '../../store/rootSlice/slice'

const GlobalLoading = () => {
  const isLoading = useSelector(selectLoading)
  return isLoading ? <h1>Loading...</h1> : null
}

export default GlobalLoading
