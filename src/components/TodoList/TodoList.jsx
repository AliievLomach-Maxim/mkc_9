import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../store/todoSlice'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

const TodoList = () => {
  const [value, setValue] = useState('')
  const todos = useSelector((state) => state.todo.todo)

  const dispatch = useDispatch()

  const handleCreate = () => {
    const newTodo = {
      id: nanoid(),
      name: value,
    }
    dispatch(create(newTodo))
  }

  return (
    <>
      <input type='text' value={value} onChange={({ target: { value } }) => setValue(value)} />
      <button onClick={handleCreate}>Create todo</button>
      <ul>
        {todos.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
