import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { subscribeToTasks, addTask,  updateTask, deleteTask,} from '../services/taskService'

export function useTasks() {
  const { user } = useAuth()
  const uid = user?.uid

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!uid) {
      setTasks([])
      setLoading(false)
      return
    }

    setLoading(true)
    const unsubscribe = subscribeToTasks(
      uid,
      (data) => {
        setTasks(data)
        setError('')
        setLoading(false)
      },
      (err) => {
        console.error(err)
        setError('Could not load your tasks. Please refresh the page.')
        setLoading(false)
      }
    )

    return unsubscribe
  }, [uid])

  const createTask = (task) => addTask(uid, task)
  const editTask = (id, changes) => updateTask(id, changes)
  const removeTask = (id) => deleteTask(id)

  return { tasks, loading, error, createTask, editTask, removeTask }
}