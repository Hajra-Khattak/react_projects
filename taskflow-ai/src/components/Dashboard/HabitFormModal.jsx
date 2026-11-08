import { useState } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'

function HabitForm({ onSave, onCancel }) {
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('7')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const trimmed = name.trim()
    if (!trimmed) return setError('Please enter a habit name.')
    if (trimmed.length > 60) return setError('Name must be 60 characters or fewer.')

    setSaving(true)
    try {
      await onSave({ name: trimmed, weeklyGoal: Number(goal) })
    } catch (err) {
      console.error(err)
      setError('Could not save the habit. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="habit-name"
        label="Habit name"
        placeholder="For example: Read 1 hour"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={saving}
      />

      <div>
        <label
          htmlFor="habit-goal"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Weekly goal
        </label>
        <select
          id="habit-goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          disabled={saving}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'day' : 'days'} per week
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 justify-end pt-2">
        <Button variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="submit" loading={saving}>
          Add habit
        </Button>
      </div>
    </form>
  )
}

export default function HabitFormModal({ open, onClose, onSave }) {
  return (
    <Modal open={open} onClose={onClose} title="New habit">
      <HabitForm onSave={onSave} onCancel={onClose} />
    </Modal>
  )
}