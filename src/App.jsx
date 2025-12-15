import { useEffect, useState } from 'react'
import { getArticles } from './api/articles'
import HitsList from './components/HitsList/HitsList'
import SearchForm from './components/SearchForm/SearchForm'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import toast from 'react-hot-toast'

const App = () => {
  const [hits, setHits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  // const handleSearch = async (query) => {
  //   try {
  //     setIsLoading(true)
  //     setError(false)
  //     const data = await getArticles(query)
  //     setHits(data.hits)
  //   } catch (error) {
  //     console.error(error)
  //     setError(true)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // pagination
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!searchQuery) return

    const handleFetch = async () => {
      try {
        setIsLoading(true)
        setError(false)
        const data = await getArticles(searchQuery, page)
        setHits((prev) => [...prev, ...data.hits])
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    handleFetch()
  }, [page, searchQuery])

  const handleSearch = async (query) => {
    if (searchQuery === query) return toast.error('Already requested..')
    setSearchQuery(query)
    setHits([])
    setPage(1)
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <hr />
      <br />
      {error && <Alert severity='error'>Oops...pls reload page.</Alert>}
      {hits.length > 0 && <HitsList items={hits} />}
      {isLoading && <CircularProgress />}
      {hits.length > 0 && <button onClick={handleLoadMore}>load more</button>}
    </div>
  )
}

export default App

// useEffect(async () => {
//   const res = await fetch()
// }, [])

// useEffect(() => {
//   const fetchTpApi = async () => {
//     const data = await getArticles()
//     setHits(data.hits)
//   }
//   fetchTpApi()
// }, [])
