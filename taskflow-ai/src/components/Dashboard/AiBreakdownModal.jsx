import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import { suggestSubtasks } from '../../services/aiService'

function Breakdown({ task, onAdd, onClose }) {
  const [status, setStatus] = useState('loading') // loading | ready | empty | error
  const [error, setError] = useState('')
  const [items, setItems] = useState([]) // { id, text, checked }
  const [attempt, setAttempt] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    setStatus('loading')
    setError('')
    setSaveError('')

    suggestSubtasks({ title: task.title, description: task.description }, controller.signal)
      .then((list) => {
        setItems(list.map((text, i) => ({ id: i, text, checked: true })))
        setStatus(list.length > 0 ? 'ready' : 'empty')
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setStatus('error')
      })

    return () => controller.abort()
  }, [task.id, task.title, task.description, attempt])

  const retry = () => setAttempt((n) => n + 1)

  const toggle = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)))

  const chosen = items.filter((i) => i.checked)
  const allChecked = chosen.length === items.length

  const toggleAll = () =>
    setItems((prev) => prev.map((i) => ({ ...i, checked: !allChecked })))

  const handleAdd = async () => {
    setSaving(true)
    setSaveError('')
    try {
      await onAdd(
        chosen.map((i) => i.text),
        task
      )
    } catch (err) {
      console.error(err)
      setSaveError('Could not add the subtasks. Check your board before trying again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Task: <span className="font-medium text-gray-900 dark:text-white">{task.title}</span>
      </p>

      {/* Loading */}
      {status === 'loading' && (
        <div className="py-10 flex flex-col items-center gap-3" role="status">
          <span className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-blue-600 animate-spin" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Thinking of subtasks...</p>
        </div>
      )}

      {/* Error */}
      {status === 'error' && (
        <div className="mt-4">
          <p className="rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm px-4 py-3">
            {error}
          </p>
          <div className="mt-6 flex gap-3 justify-end">
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button onClick={retry}>Try again</Button>
          </div>
        </div>
      )}

      {/* Empty */}
      {status === 'empty' && (
        <div className="mt-4">
          <p className="rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-4 py-3">
            No subtasks came back for this task. Try again, or add more detail to the task
            description first.
          </p>
          <div className="mt-6 flex gap-3 justify-end">
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button onClick={retry}>Try again</Button>
          </div>
        </div>
      )}

      {/* Results */}
      {status === 'ready' && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {chosen.length} of {items.length} selected
            </p>
            <button
              type="button"
              onClick={toggleAll}
              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {allChecked ? 'Select none' : 'Select all'}
            </button>
          </div>

          <ul className="space-y-2 max-h-72 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id}>
                <label className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggle(item.id)}
                    disabled={saving}
                    className="mt-0.5 w-4 h-4 accent-blue-600"
                  />
                  <span className="text-sm text-gray-900 dark:text-white break-words">
                    {item.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {saveError && <p className="mt-3 text-sm text-red-600">{saveError}</p>}

          <div className="mt-6 flex gap-3 justify-end">
            <Button variant="secondary" onClick={onClose} disabled={saving}>
              Cancel
            </Button>
            <Button onClick={handleAdd} loading={saving} disabled={chosen.length === 0}>
              Add {chosen.length} {chosen.length === 1 ? 'task' : 'tasks'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AiBreakdownModal({ open, task, onClose, onAdd }) {
  return (
    <Modal open={open} onClose={onClose} title="Break this down">
      {task && <Breakdown key={task.id} task={task} onAdd={onAdd} onClose={onClose} />}
    </Modal>
  )
}