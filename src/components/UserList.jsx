import RenderUser from './RenderUser'

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <RenderUser data={user} key={user.id} />
      ))}
    </ul>
  )
}

export default UserList
