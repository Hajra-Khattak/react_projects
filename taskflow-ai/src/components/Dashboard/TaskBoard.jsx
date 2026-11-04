import { columnsMeta, priorityStyle } from '../../utils/constants'

export default function TaskBoard({ tasks, onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columnsMeta.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.key)
        return (
          <div key={col.key} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-1 mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{col.name}</h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {colTasks.length}
              </span>
            </div>

            <div className="space-y-3">
              {colTasks.map((task) => (
                <div key={task.id} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 cursor-grab">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityStyle[task.priority]}`}>
                      {task.priority}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {task.due ? `Due ${task.due}` : 'No date'}
                    </span>
                  </div>
                </div>
              ))}
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