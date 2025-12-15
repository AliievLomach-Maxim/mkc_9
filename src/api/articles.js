import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

export const getArticles = async (searchQuery, page) => {
  const res = await axios.get('/search', {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page,
    },
  })
  return res.data
}
