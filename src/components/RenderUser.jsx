const RenderUser = ({ data }) => {
  return (
    <li>
      <h4>{data.name}</h4>
      <p>{data.age}</p>
      <hr />
    </li>
  )
}

export default RenderUser
