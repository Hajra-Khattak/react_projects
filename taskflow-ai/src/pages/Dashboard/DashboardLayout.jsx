import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import TaskFormModal from '../../components/Dashboard/TaskFormModal'
import HabitFormModal from '../../components/Dashboard/HabitFormModal'
import { useTasks } from '../../hooks/useTasks'
import { useHabits } from '../../hooks/useHabits'
import { useTimeZone } from '../../context/TimeZoneContext'
import { getWeekDays } from '../../utils/dates'
import { currentStreak, bestStreak, buildCounts } from '../../utils/activity'
import { habitColors } from '../../utils/constants'

export default function DashboardLayout() {
  const { timeZone, today } = useTimeZone()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [actionError, setActionError] = useState('')

  const {
    tasks,
    loading: loadingTasks,
    error: tasksError,
    createTask,
    editTask,
    removeTask,
  } = useTasks()

  const {
    habits: rawHabits,
    loading: loadingHabits,
    error: habitsError,
    createHabit,
    setDay,
  } = useHabits()

  // Popups
  const [formState, setFormState] = useState(null) // { task, status, due }
  const [habitFormOpen, setHabitFormOpen] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  // Habits with calculated fields (done today, streaks)
  const habits = rawHabits.map((h) => {
    const dates = h.completedDates || []
    return {
      ...h,
      completedDates: dates,
      weeklyGoal: h.weeklyGoal || 7,
      done: dates.includes(today),
      streak: currentStreak(dates, today),
      best: bestStreak(dates),
    }
  })

  // Heatmap data and top numbers
  const activityCounts = buildCounts(tasks, habits, timeZone)
  const weekKeys = getWeekDays(today).map((d) => d.key)
  const goalTotal = habits.reduce((sum, h) => sum + h.weeklyGoal, 0)
  const goalDone = habits.reduce(
    (sum, h) =>
      sum + Math.min(h.weeklyGoal, h.completedDates.filter((k) => weekKeys.includes(k)).length),
    0
  )
  const activityStats = {
    current: Math.max(0, ...habits.map((h) => h.streak)),
    longest: Math.max(0, ...habits.map((h) => h.best)),
    consistency: goalTotal === 0 ? 0 : Math.round((goalDone / goalTotal) * 100),
  }

  // Runs an action and shows one error message if it fails
  const run = async (action) => {
    setActionError('')
    try {
      await action()
    } catch (err) {
      console.error(err)
      setActionError('Something went wrong. Please try again.')
    }
  }

  // Tasks
  const openAdd = (status = 'todo', due = '') => setFormState({ task: null, status, due })
  const openEdit = (task) => setFormState({ task, status: task.status, due: task.due })
  const closeForm = () => setFormState(null)

  const handleSave = async (data) => {
    if (formState.task) {
      await editTask(formState.task.id, data)
    } else {
      await createTask(data)
    }
    closeForm()
  }

  const toggleTaskDone = (task) =>
    run(() => editTask(task.id, { status: task.status === 'done' ? 'todo' : 'done' }))

  const askDelete = (task) => {
    setDeleteError('')
    setDeleteTarget(task)
  }
  const closeDelete = () => {
    if (!deleting) setDeleteTarget(null)
  }
  const confirmDelete = async () => {
    setDeleting(true)
    setDeleteError('')
    try {
      await removeTask(deleteTarget.id)
      setDeleteTarget(null)
    } catch (err) {
      console.error(err)
      setDeleteError('Could not delete the task. Please try again.')
    } finally {
      setDeleting(false)
    }
  }

  // Habits
  const openAddHabit = () => setHabitFormOpen(true)
  const closeHabitForm = () => setHabitFormOpen(false)

  const handleSaveHabit = async (data) => {
    await createHabit({
      ...data,
      color: habitColors[rawHabits.length % habitColors.length],
    })
    closeHabitForm()
  }

  const toggleHabitDay = (habit, dateKey) =>
    run(() => setDay(habit.id, dateKey, !habit.completedDates.includes(dateKey)))

  // Used by the habits list (toggles today)
  const toggleHabit = (id) => {
    const habit = habits.find((h) => h.id === id)
    if (habit) toggleHabitDay(habit, today)
  }

  const visibleTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  const bannerError = actionError || tasksError || habitsError

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

          <Button size="sm" onClick={() => openAdd('todo')} className="shrink-0">
            + New task
          </Button>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {bannerError && (
              <p className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm px-4 py-3">
                {bannerError}
              </p>
            )}

            <Outlet
              context={{
                tasks,
                visibleTasks,
                loadingTasks,
                habits,
                loadingHabits,
                activityCounts,
                activityStats,
                toggleHabit,
                toggleHabitDay,
                toggleTaskDone,
                openAddHabit,
                openAdd,
                openEdit,
                askDelete,
              }}
            />
          </div>
        </main>
      </div>

      {/* Add / Edit task popup */}
      <TaskFormModal
        open={!!formState}
        onClose={closeForm}
        onSave={handleSave}
        task={formState?.task}
        defaultStatus={formState?.status}
        defaultDue={formState?.due}
      />

      {/* New habit popup */}
      <HabitFormModal open={habitFormOpen} onClose={closeHabitForm} onSave={handleSaveHabit} />

      {/* Delete confirmation popup */}
      <Modal open={!!deleteTarget} onClose={closeDelete} title="Delete task?">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          "{deleteTarget?.title}" will be deleted. This can't be undone.
        </p>

        {deleteError && <p className="mt-3 text-sm text-red-600">{deleteError}</p>}

        <div className="mt-6 flex gap-3 justify-end">
          <Button variant="secondary" onClick={closeDelete} disabled={deleting}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete} loading={deleting}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  )
}