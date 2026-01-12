import { useDispatch, useSelector } from 'react-redux'
import { counterIncrement } from './store/counterSlice'
import { deposit } from './store/balanceSlice'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.balance.value)

  const handleDeposit = () => {
    // dispatch({
    //   type:'asd',
    //   payload:200
    // })
    dispatch(deposit(200))
  }

  return (
    <div>
      <h2>Value:{state}</h2>
      <hr />
      <button onClick={handleDeposit}>deposit</button>
      <button onClick={() => dispatch(counterIncrement(200))}>increment</button>
    </div>
  )
}

export default App
