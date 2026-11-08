import { priorityStyle } from '../../utils/constants'
import { useTimeZone } from '../../context/TimeZoneContext'

function isOverdue(task) {
  if (!task.due || task.status === 'done') return false
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  return task.due < today
}
// function isOverdue(task, today) {
//   return !!task.due && task.status !== 'done' && task.due < today
// }

const iconProps = {
  className: 'w-4 h-4',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export default function TaskCard({ task, onEdit, onDelete }) {
//   const overdue = isOverdue(task)
  const { today } = useTimeZone()
const overdue = isOverdue(task, today)

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-start justify-between gap-2">
        <p
          className={`text-sm font-medium break-words ${
            task.status === 'done'
              ? 'line-through text-gray-400'
              : 'text-gray-900 dark:text-white'
          }`}
        >
          {task.title}
        </p>

        <div className="flex gap-1 shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-within:opacity-100 transition">
          <button
            type="button"
            onClick={() => onEdit(task)}
            aria-label={`Edit ${task.title}`}
            className="p-1.5 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
          >
            <svg {...iconProps}>
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onDelete(task)}
            aria-label={`Delete ${task.title}`}
            className="p-1.5 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <svg {...iconProps}>
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14M10 11v6M14 11v6" />
            </svg>
          </button>
        </div>
      </div>

      {task.description && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityStyle[task.priority]}`}>
          {task.priority}
        </span>
        <span
          className={`text-xs ${
            overdue
              ? 'font-medium text-red-600 dark:text-red-400'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {task.due ? (overdue ? `Overdue ${task.due}` : `Due ${task.due}`) : 'No date'}
        </span>
      </div>
    </div>
  )
}