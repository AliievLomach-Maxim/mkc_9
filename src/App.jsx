import RenderUser from './components/RenderUser'
import Title from './components/Title/Title'
import UserList from './components/UserList'
import Wrapper from './components/Wrapper/Wrapper'

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
      <Title color='red'>Content TITLE</Title>
      <Title>Content TITLE</Title>
      <Title>Content TITLE</Title>
      <Title>Content TITLE</Title>
      <Title>Content TITLE</Title>
      <UserList users={users} />
      <Wrapper>Content 1</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
      <Wrapper>Content 2</Wrapper>
    </>
  )
}

export default App
