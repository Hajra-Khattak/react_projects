import { useState } from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'

const fieldClass =
  'w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'

const labelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'

function TaskForm({ task, defaultStatus, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'Medium',
    due: task?.due || '',
    status: task?.status || defaultStatus,
  })
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const title = form.title.trim()
    if (!title) return setError('Please enter a title.')
    if (title.length > 120) return setError('Title must be 120 characters or fewer.')

    setSaving(true)
    try {
      await onSave({ ...form, title, description: form.description.trim() })
    } catch (err) {
      console.error(err)
      setError('Could not save the task. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="title"
        name="title"
        label="Title"
        placeholder="What needs to be done?"
        value={form.title}
        onChange={handleChange}
        disabled={saving}
      />

      <div>
        <label htmlFor="description" className={labelClass}>
          Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          placeholder="Add more details..."
          value={form.description}
          onChange={handleChange}
          disabled={saving}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="priority" className={labelClass}>Priority</label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            disabled={saving}
            className={fieldClass}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className={labelClass}>Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            disabled={saving}
            className={fieldClass}
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      <Input
        id="due"
        name="due"
        label="Due date (optional)"
        type="date"
        value={form.due}
        onChange={handleChange}
        disabled={saving}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 justify-end pt-2">
        <Button variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="submit" loading={saving}>
          {task ? 'Save changes' : 'Add task'}
        </Button>
      </div>
    </form>
  )
}

export default function TaskFormModal({ open, onClose, onSave, task, defaultStatus = 'todo' }) {
  return (
    <Modal open={open} onClose={onClose} title={task ? 'Edit task' : 'New task'}>
      <TaskForm
        key={task?.id || 'new'}
        task={task}
        defaultStatus={defaultStatus}
        onSave={onSave}
        onCancel={onClose}
      />
    </Modal>
  )
}