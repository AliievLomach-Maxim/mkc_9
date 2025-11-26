import './App.css'
import RenderUser from './components/RenderUser'
import UserList from './components/UserList'

const users = [
  {
    id: '1',
    name: 'Alex',
    age: 42,
  },
  {
    id: '2',
    name: 'John',
    age: 42,
  },
  {
    id: '3',
    name: 'Bob',
    age: 42,
  },
]

function App() {
  return (
    <>
      <UserList users={users} />
    </>
  )
}

export default App
