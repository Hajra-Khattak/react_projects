export default function HabitsPanel({ habits, onToggle }) {
  const doneCount = habits.filter((h) => h.done).length

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Today's habits</h2>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {doneCount} of {habits.length} done
        </span>
      </div>

      <ul className="space-y-3">
        {habits.map((h) => (
          <li key={h.id} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onToggle(h.id)}
                aria-label={`Mark ${h.name} as ${h.done ? 'not done' : 'done'}`}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs transition ${
                  h.done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {h.done ? '✓' : ''}
              </button>
              <span className={`text-sm ${h.done ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                {h.name}
              </span>
            </div>
            <span className="text-xs font-medium text-orange-600 dark:text-orange-400 whitespace-nowrap">
              {h.streak} day streak
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}