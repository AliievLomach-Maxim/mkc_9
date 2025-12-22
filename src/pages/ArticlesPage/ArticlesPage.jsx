import { useEffect, useState } from 'react'
import { getArticles } from '../../api/articles'
import HitsList from '../../components/HitsList/HitsList'
import { Outlet } from 'react-router'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles('react', 1)
      setArticles(data.hits)
    }
    fetchData()
  }, [])

  return (
    <div>
      {articles.length > 0 && <HitsList items={articles} />}
      <Outlet />
    </div>
  )
}

export default ArticlesPage
