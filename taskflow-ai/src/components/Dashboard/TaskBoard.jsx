import { columnsMeta } from '../../utils/constants'
import TaskCard from './TaskCard'
import Skeleton from '../Skeleton/Skeleton'

export default function TaskBoard({ tasks, loading, onAdd, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columnsMeta.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.key)
        return (
          <div
            key={col.key}
            className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between px-1 mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{col.name}</h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {loading ? '-' : colTasks.length}
              </span>
            </div>

            <div className="space-y-3">
              {loading ? (
                <>
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                </>
              ) : colTasks.length === 0 ? (
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 py-4">
                  No tasks here yet.
                </p>
              ) : (
                colTasks.map((task) => (
                  <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))
              )}
            </div>

            <button
              type="button"
              onClick={() => onAdd(col.key)}
              className="mt-3 w-full text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition"
            >
              + Add task
            </button>
          </div>
        )
      })}
    </div>
  )
}