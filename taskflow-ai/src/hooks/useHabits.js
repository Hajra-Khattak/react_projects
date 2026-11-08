import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { subscribeToHabits, addHabit, setHabitDay } from '../services/habitService'

export function useHabits() {
  const { user } = useAuth()
  const uid = user?.uid

  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!uid) {
      setHabits([])
      setLoading(false)
      return
    }

    setLoading(true)
    const unsubscribe = subscribeToHabits(
      uid,
      (data) => {
        setHabits(data)
        setError('')
        setLoading(false)
      },
      (err) => {
        console.error(err)
        setError('Could not load your habits. Please refresh the page.')
        setLoading(false)
      }
    )

    return unsubscribe
  }, [uid])

  const createHabit = (habit) => addHabit(uid, habit)
  const setDay = (id, dateKey, done) => setHabitDay(id, dateKey, done)

  return { habits, loading, error, createHabit, setDay }
}