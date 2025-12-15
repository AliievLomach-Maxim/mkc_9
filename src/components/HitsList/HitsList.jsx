const HitsList = ({ items }) => {
  return (
    <ul>
      {items.map((el) => (
        <li key={el.objectID}>
          <a href={el.url}>{el.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default HitsList
