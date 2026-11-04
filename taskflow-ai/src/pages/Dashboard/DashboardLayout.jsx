import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import { initialTasks, initialHabits } from '../../utils/constants'

const emptyForm = { title: '', priority: 'Medium', due: '', status: 'todo' }

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tasks, setTasks] = useState(initialTasks)
  const [habits, setHabits] = useState(initialHabits)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  const openForm = (status = 'todo') => {
    setForm({ ...emptyForm, status })
    setError('')
    setShowForm(true)
  }
  const closeForm = () => setShowForm(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = (e) => {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('Please enter a title')
      return
    }
    setTasks([...tasks, { ...form, title: form.title.trim(), id: Date.now() }])
    closeForm()
  }

  // Sample logic only. Real streaks are calculated from dates in Phase 4.
  const toggleHabit = (id) =>
    setHabits(
      habits.map((h) =>
        h.id === id
          ? { ...h, done: !h.done, streak: h.done ? h.streak - 1 : h.streak + 1 }
          : h
      )
    )

  const visibleTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 lg:flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 flex items-center gap-3 px-4 sm:px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 -ml-2 text-gray-700 dark:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Input
            id="search"
            type="search"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 max-w-md"
          />

          <Button size="sm" onClick={() => openForm('todo')} className="shrink-0">
            + New task
          </Button>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <Outlet context={{ tasks, visibleTasks, habits, toggleHabit, openForm }} />
          </div>
        </main>
      </div>

      {/* Add task popup (shared by every dashboard page) */}
      <Modal open={showForm} onClose={closeForm} title="New task">
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            id="title"
            name="title"
            label="Title"
            placeholder="What needs to be done?"
            value={form.title}
            onChange={handleChange}
            error={error}
          />

          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <Input id="due" name="due" label="Due date" type="date" value={form.due} onChange={handleChange} />

          <div className="flex gap-3 justify-end pt-2">
            <Button variant="secondary" onClick={closeForm}>Cancel</Button>
            <Button type="submit">Save task</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}