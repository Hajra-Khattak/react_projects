import { useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router'
import toast from 'react-hot-toast'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import TaskFormModal from '../../components/dashboard/TaskFormModal'
import HabitFormModal from '../../components/dashboard/HabitFormModal'
import AiBreakdownModal from '../../components/dashboard/AiBreakdownModal'
import { useTasks } from '../../hooks/useTasks'
import { useHabits } from '../../hooks/useHabits'
import { useTimeZone } from '../../context/TimeZoneContext'
import { getWeekDays } from '../../utils/dates'
import { currentStreak, bestStreak, buildCounts } from '../../utils/activity'
import { habitColors } from '../../utils/constants'

export default function DashboardLayout() {
  const { timeZone, today } = useTimeZone()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ---------- Search ----------
  // The search text lives in the URL (?q=...), so the box is filled only on the results page
  const onSearchPage = pathname === '/dashboard/search'
  const searchText = onSearchPage ? searchParams.get('q') || '' : ''
  const returnTo = useRef('/dashboard') // the page to go back to when the box is cleared

  const handleSearch = (e) => {
    const value = e.target.value

    if (value === '') {
      if (onSearchPage) navigate(returnTo.current, { replace: true })
      return
    }

    if (!onSearchPage) returnTo.current = pathname
    navigate(`/dashboard/search?q=${encodeURIComponent(value)}`, { replace: onSearchPage })
  }

  const {
    tasks,
    loading: loadingTasks,
    error: tasksError,
    createTask,
    editTask,
    removeTask,
    moveTasks,
  } = useTasks()

  const {
    habits: rawHabits,
    loading: loadingHabits,
    error: habitsError,
    createHabit,
    editHabit,
    removeHabit,
    setDay,
  } = useHabits()

  // Task popups
  const [formState, setFormState] = useState(null) // { task, status, due }
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  // AI breakdown popup
  const [aiTarget, setAiTarget] = useState(null)

  // Habit popups
  const [habitFormState, setHabitFormState] = useState(null) // { habit } (habit null = create)
  const [habitDeleteTarget, setHabitDeleteTarget] = useState(null)
  const [habitDeleting, setHabitDeleting] = useState(false)
  const [habitDeleteError, setHabitDeleteError] = useState('')

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

  // Runs an action and shows a red toast if it fails
  const run = async (action, failMessage = 'Something went wrong. Please try again.') => {
    try {
      await action()
    } catch (err) {
      console.error(err)
      toast.error(failMessage)
    }
  }

  // ---------- Tasks ----------
  const openAdd = (status = 'todo', due = '') => setFormState({ task: null, status, due })
  const openEdit = (task) => setFormState({ task, status: task.status, due: task.due })
  const closeForm = () => setFormState(null)

  // If saving fails, the form stays open and shows its own error message
  const handleSave = async (data) => {
    if (formState.task) {
      await editTask(formState.task.id, data)
      toast.success('Task updated')
    } else {
      await createTask(data)
      toast.success('Task added')
    }
    closeForm()
  }

  const toggleTaskDone = (task) =>
    run(
      () => editTask(task.id, { status: task.status === 'done' ? 'todo' : 'done' }),
      'Could not update the task.'
    )

  // Saves the new status and order after a drag and drop
  const handleMoveTasks = async (updates) => {
    try {
      await moveTasks(updates)
    } catch (err) {
      console.error(err)
      toast.error('Could not move the task. It was put back.')
      throw err // lets the board put the card back where it was
    }
  }

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
      toast.success('Task deleted')
    } catch (err) {
      console.error(err)
      setDeleteError('Could not delete the task. Please try again.')
    } finally {
      setDeleting(false)
    }
  }

  // ---------- AI breakdown ----------
  const openBreakdown = (task) => setAiTarget(task)
  const closeBreakdown = () => setAiTarget(null)

  // Saves the chosen subtasks as new tasks in To Do, one after another so they keep their order
  const handleAddSubtasks = async (titles, parent) => {
    for (const title of titles) {
      await createTask({
        title,
        description: `Subtask of: ${parent.title}`,
        priority: parent.priority,
        due: parent.due || '',
        status: 'todo',
      })
    }
    toast.success(`${titles.length} ${titles.length === 1 ? 'task' : 'tasks'} added`)
    closeBreakdown()
  }

  // ---------- Habits ----------
  const openAddHabit = () => setHabitFormState({ habit: null })
  const openEditHabit = (habit) => setHabitFormState({ habit })
  const closeHabitForm = () => setHabitFormState(null)

  // Creates a new habit, or saves changes when a habit is being edited
  const handleSaveHabit = async (data) => {
    if (habitFormState.habit) {
      await editHabit(habitFormState.habit.id, data)
      toast.success('Habit updated')
    } else {
      await createHabit(data)
      toast.success('Habit added')
    }
    closeHabitForm()
  }

  const askDeleteHabit = (habit) => {
    setHabitDeleteError('')
    setHabitDeleteTarget(habit)
  }
  const closeHabitDelete = () => {
    if (!habitDeleting) setHabitDeleteTarget(null)
  }
  const confirmDeleteHabit = async () => {
    setHabitDeleting(true)
    setHabitDeleteError('')
    try {
      await removeHabit(habitDeleteTarget.id)
      setHabitDeleteTarget(null)
      toast.success('Habit deleted')
    } catch (err) {
      console.error(err)
      setHabitDeleteError('Could not delete the habit. Please try again.')
    } finally {
      setHabitDeleting(false)
    }
  }

  const toggleHabitDay = (habit, dateKey) =>
    run(
      () => setDay(habit.id, dateKey, !habit.completedDates.includes(dateKey)),
      'Could not save your check-in.'
    )

  // Used by the habits list (toggles today)
  const toggleHabit = (id) => {
    const habit = habits.find((h) => h.id === id)
    if (habit) toggleHabitDay(habit, today)
  }

  // Only loading errors stay as a banner. Everything else is a toast.
  const bannerError = tasksError || habitsError

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
            placeholder="Search tasks and habits..."
            value={searchText}
            onChange={handleSearch}
            className="flex-1 max-w-md"
          />
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
                visibleTasks: tasks,
                loadingTasks,
                habits,
                loadingHabits,
                activityCounts,
                activityStats,
                toggleHabit,
                toggleHabitDay,
                toggleTaskDone,
                openAddHabit,
                openEditHabit,
                askDeleteHabit,
                openAdd,
                openEdit,
                askDelete,
                moveTasks: handleMoveTasks,
                breakDownTask: openBreakdown,
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

      {/* Delete task popup */}
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

      {/* AI breakdown popup */}
      <AiBreakdownModal
        open={!!aiTarget}
        task={aiTarget}
        onClose={closeBreakdown}
        onAdd={handleAddSubtasks}
      />

      {/* Add / Edit habit popup */}
      <HabitFormModal
        open={!!habitFormState}
        onClose={closeHabitForm}
        onSave={handleSaveHabit}
        habit={habitFormState?.habit}
        defaultColor={habitColors[rawHabits.length % habitColors.length]}
      />

      {/* Delete habit popup */}
      <Modal open={!!habitDeleteTarget} onClose={closeHabitDelete} title="Delete habit?">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          "{habitDeleteTarget?.name}" will be deleted, along with its check-in history. This can't
          be undone.
        </p>

        {habitDeleteError && <p className="mt-3 text-sm text-red-600">{habitDeleteError}</p>}

        <div className="mt-6 flex gap-3 justify-end">
          <Button variant="secondary" onClick={closeHabitDelete} disabled={habitDeleting}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteHabit} loading={habitDeleting}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  )
}