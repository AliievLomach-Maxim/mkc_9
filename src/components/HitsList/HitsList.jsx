import { Link, useLocation } from 'react-router'

const HitsList = ({ items }) => {
  const locationArticlesPage = useLocation()
  return (
    <ul>
      {items.map((el) => (
        <li key={el.objectID}>
          <Link to={`/articles/details/${el.objectID}`} state={locationArticlesPage}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HitsList
