import { useEffect, useState } from 'react'
import { getArticleDetails } from '../../api/articles'
import { Link, useParams } from 'react-router'

const ArticlesDetailsPage = () => {
  const [details, setDetails] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticleDetails(id)
      setDetails(data)
    }
    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <div>
      <Link to='/articles'>Back</Link>
      {details && (
        <>
          <h1>{details.title}</h1>
          <hr />
          <a href={details.url}>Link to article</a>
          <br />
          <br />
          <h4>Comments:</h4>
          <ul>
            {details.children?.map((child) => (
              <li key={child.objectId}>
                <p>{child.text}</p>
                <hr />
                <a href={details.url}>Link to comment</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ArticlesDetailsPage
