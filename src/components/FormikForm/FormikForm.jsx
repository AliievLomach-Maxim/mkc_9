import { TextField, FormControl } from '@mui/material'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import styles from './FormikForm.module.css'

const validationSchema = yup.object().shape({
  firstName: yup.string().min(3, 'MIN 3').max(5, 'MAX 5').required('Required'),
  lastName: yup.string().required(),
  country: yup.string().oneOf(['en', 'ua']),
  description: yup.string().required(),
})

const FormikForm = ({ handleCreate }) => {
  const handleSubmit = (values, actions) => {
    console.log('handleSubmit')
    handleCreate(values)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        country: 'ua',
        description: 'description',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(props) => {
        console.log('props', props)
        return (
          <Form>
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
              name='firstName'
              value={props.values.firstName}
              onChange={props.handleChange}
            />
            <br />
            <br />
            <label>
              First Name:
              <br />
              <Field type='text' name='firstName' className={styles.field} />
              <ErrorMessage name='firstName' component='span' className={styles.error} />
            </label>
            <br />
            <label>
              Last Name:
              <br />
              <Field type='text' name='lastName' />
              <ErrorMessage name='lastName' component='span' />
            </label>
            <br />
            <label>
              Select your country:
              <br />
              <Field as='select' name='country'>
                <option value='en'>EN</option>
                <option value='ua'>UA</option>
              </Field>
              <ErrorMessage name='country' component='span' />
            </label>
            <br />
            <Field as='textarea' name='description' />
            <ErrorMessage name='description' component='span' />
            <br />
            <button type='submit'>Create</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikForm
