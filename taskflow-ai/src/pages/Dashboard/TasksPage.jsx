import { useState } from 'react'
import { useOutletContext } from 'react-router'
import TaskBoard from '../../components/Dashboard/TaskBoard'
import Button from '../../components/Button/Button'
import EmptyState from '../../components/EmptyState/EmptyState'

const filters = ['All', 'High', 'Medium', 'Low']

export default function TasksPage() {
  // const { tasks, visibleTasks, loadingTasks, openAdd, openEdit, askDelete, moveTasks } =
  //   useOutletContext()

  const { tasks, visibleTasks, loadingTasks, openAdd, openEdit, askDelete, moveTasks, breakDownTask } =
  useOutletContext()
  const [priority, setPriority] = useState('All')

  const shownTasks = visibleTasks.filter(
    (t) => priority === 'All' || t.priority === priority
  )

  const isFiltering = priority !== 'All'

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tasks</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Plan, track and finish your work. Drag the grip on a card to move it.
          </p>
        </div>

        <Button onClick={() => openAdd('todo')} className="shrink-0">
          + New task
        </Button>
      </div>

      {/* Priority filter */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">Priority:</span>

        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setPriority(f)}
            aria-pressed={priority === f}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
              priority === f
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {f}
          </button>
        ))}

        {!loadingTasks && isFiltering && (
          <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
            Showing {shownTasks.length} of {tasks.length} tasks. Choose All to drag tasks.
          </span>
        )}
      </div>

      {!loadingTasks && tasks.length === 0 && (
  <div className="mb-6">
    <EmptyState
      title="No tasks yet"
      text="Add your first task, then drag it across the board as you work."
      actionLabel="+ Add your first task"
      onAction={() => openAdd('todo')}
    />
  </div>
)}

      <TaskBoard
        tasks={shownTasks}
        loading={loadingTasks}
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={askDelete}
        onMove={moveTasks}
        onBreakdown={breakDownTask}
        draggable={!isFiltering}
      />
    </>
  )
}