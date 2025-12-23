import { useEffect, useState } from 'react'
import { getArticles } from '../../api/articles'
import HitsList from '../../components/HitsList/HitsList'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Field, Form, Formik } from 'formik'
import { useSearchParams } from 'react-router'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])

  // const [searchValue, setSearchValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  const searchValue = searchParams.get('search') ?? ''

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles('react', 1)
      setArticles(data.hits)
    }
    fetchData()
  }, [])

  const handleChange = ({ target: { value } }) => {
    // const oldData = searchParams.getAll()
    // setSearchParams({ ...oldData ,search:value})
    if (!value) searchParams.delete('search')
    // setSearchParams({})
    else searchParams.set('search', value)

    setSearchParams(searchParams)
  }

  const filteredArticles = articles?.filter((el) =>
    el.title.toLowerCase().includes(searchValue?.toLowerCase())
  )

  return (
    <div>
      <input type='text' value={searchValue} onChange={handleChange} />

      {filteredArticles.length > 0 && <HitsList items={filteredArticles} />}
    </div>
  )
}

export default ArticlesPage
