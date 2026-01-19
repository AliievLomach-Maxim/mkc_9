import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { createTaskThunk, deleteTaskThunk, getTaskThunk } from '../../store/tasks/thunks'
import toast from 'react-hot-toast'

const TaskList = () => {
  const [value, setValue] = useState('')
  const tasks = useSelector((state) => state.task.task)
  const isLoading = useSelector((state) => state.task.loading)
  const isError = useSelector((state) => state.task.error)

  const dispatch = useDispatch()

  const handleCreate = () => {
    const newTask = {
      text: value,
    }
    dispatch(createTaskThunk(newTask))
      .unwrap()
      .then(() => {
        toast.success('Happy')
      })
  }

  useEffect(() => {
    dispatch(getTaskThunk())
  }, [dispatch])

  // const handleDelete = (id) => {
  //   dispatch(deleteTaskThunk(id))
  //     .unwrap()
  //     .then((payload) => {
  //       toast.success('Successfully removed task')
  //     })
  //     .catch(() => {
  //       toast.error('Error removed task')
  //     })
  //   // toast.success('Successfully removed task')
  // }

  const handleDelete = async (id) => {
    try {
      const payload = await dispatch(deleteTaskThunk(id)).unwrap()
      toast.success(`Successfully removed task: ${payload.id}`)
    } catch (error) {
      console.error(error)
      toast.error('Error removed task')
    }
    // toast.success('Successfully removed task')
  }

  return (
    <>
      <input type='text' value={value} onChange={({ target: { value } }) => setValue(value)} />
      <button onClick={handleCreate}>Create task</button>
      <br />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>isError...{isError}</h1>}
      {isError && <h1>Oops some error</h1>}
      <ul>
        {tasks.map((el) => (
          <li key={el.id}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p>{el.text}</p>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
