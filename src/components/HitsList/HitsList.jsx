import { Link } from 'react-router'

const HitsList = ({ items }) => {
  return (
    <ul>
      {items.map((el) => (
        <li key={el.objectID}>
          <Link to={`/articles/details/${el.objectID}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default HitsList
