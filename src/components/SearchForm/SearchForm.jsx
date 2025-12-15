import { Field, Form, Formik } from 'formik'

const SearchForm = ({ handleSearch }) => {
  const onSubmit = (value) => {
    handleSearch(value.searchValue)
    // actions.resetForm()
  }
  return (
    <Formik initialValues={{ searchValue: '' }} onSubmit={onSubmit}>
      <Form>
        <Field type='text' name='searchValue' />
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  )
}

export default SearchForm
