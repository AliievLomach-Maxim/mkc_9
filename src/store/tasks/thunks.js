import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io/'

export const getTaskThunk = createAsyncThunk('task/get', async () => {
  const res = await axios.get('/tasks')
  return res.data
})

export const createTaskThunk = createAsyncThunk('task/create', async (data) => {
  const res = await axios.post('/tasks', data)
  return res.data
})

export const deleteTaskThunk = createAsyncThunk('task/delete', async (id) => {
  const res = await axios.delete(`/tasks/${id}`)
  return res.data
})
