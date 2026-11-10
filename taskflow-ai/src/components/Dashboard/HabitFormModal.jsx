import { useState } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { habitColors } from '../../utils/constants'

function HabitForm({ habit, defaultColor, onSave, onCancel }) {
  const isEdit = !!habit

  const [name, setName] = useState(habit?.name || '')
  const [goal, setGoal] = useState(String(habit?.weeklyGoal || 7))
  const [color, setColor] = useState(habit?.color || defaultColor || habitColors[0])
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
      await onSave({ name: trimmed, weeklyGoal: Number(goal), color })
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

      <div>
        <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Color</p>
        <div className="flex flex-wrap gap-2">
          {habitColors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              disabled={saving}
              aria-label={`Color ${c.replace('bg-', '').replace('-500', '')}`}
              aria-pressed={color === c}
              className={`w-7 h-7 rounded-full ${c} ${
                color === c
                  ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-900'
                  : ''
              }`}
            />
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 justify-end pt-2">
        <Button variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="submit" loading={saving}>
          {isEdit ? 'Save changes' : 'Add habit'}
        </Button>
      </div>
    </form>
  )
}

export default function HabitFormModal({ open, onClose, onSave, habit, defaultColor }) {
  return (
    <Modal open={open} onClose={onClose} title={habit ? 'Edit habit' : 'New habit'}>
      <HabitForm
        key={habit?.id || 'new'}
        habit={habit}
        defaultColor={defaultColor}
        onSave={onSave}
        onCancel={onClose}
      />
    </Modal>
  )
}