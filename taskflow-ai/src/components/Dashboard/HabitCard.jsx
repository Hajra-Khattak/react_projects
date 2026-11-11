import { addDays } from '../../utils/dates'

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

export default function HabitCard({ habit, today, weekKeys, onCheckIn, onEdit, onDelete }) {
  const doneToday = habit.completedDates.includes(today)
  const weekCount = habit.completedDates.filter((k) => weekKeys.includes(k)).length
  const reached = weekCount >= habit.weeklyGoal
  const percent = Math.min(100, Math.round((weekCount / habit.weeklyGoal) * 100))
  const last7 = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6))

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      {/* Name, goal, edit and delete */}
      <div className="flex items-start gap-3">
        <span
          className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-base font-bold text-white ${habit.color}`}
        >
          {habit.name.charAt(0).toUpperCase()}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-gray-900 dark:text-white truncate">
            {habit.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Goal: {habit.weeklyGoal} {habit.weeklyGoal === 1 ? 'day' : 'days'} per week
          </p>
        </div>

        <div className="flex shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-within:opacity-100 transition">
          <button
            type="button"
            onClick={() => onEdit(habit)}
            aria-label={`Edit ${habit.name}`}
            className="p-1.5 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
          >
            <svg {...iconProps}>
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onDelete(habit)}
            aria-label={`Delete ${habit.name}`}
            className="p-1.5 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <svg {...iconProps}>
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14M10 11v6M14 11v6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Current and best streak */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-3 text-center">
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {habit.streak}{' '}
            <span className="text-xs font-medium">{habit.streak === 1 ? 'day' : 'days'}</span>
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Current streak</p>
        </div>
        <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-3 text-center">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {habit.best}{' '}
            <span className="text-xs font-medium">{habit.best === 1 ? 'day' : 'days'}</span>
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Best streak</p>
        </div>
      </div>

      {/* Weekly progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>This week</span>
          <span className={reached ? 'font-medium text-green-600 dark:text-green-400' : ''}>
            {weekCount}/{habit.weeklyGoal}
          </span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
          <div
            className={`h-2 rounded-full transition-all ${reached ? 'bg-green-500' : 'bg-blue-600'}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Last 7 days */}
      <div className="mt-4">
        <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-1.5">Last 7 days</p>
        <div className="flex items-center justify-between gap-1">
          {last7.map((key) => {
            const checked = habit.completedDates.includes(key)
            return (
              <span
                key={key}
                title={key}
                className={`w-5 h-5 rounded-md ${
                  checked ? habit.color : 'bg-gray-200 dark:bg-gray-700'
                } ${
                  key === today
                    ? 'ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-gray-900'
                    : ''
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Daily check-in */}
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={() => onCheckIn(habit)}
          aria-pressed={doneToday}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
            doneToday
              ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {doneToday ? 'Done today (tap to undo)' : 'Check in today'}
        </button>
      </div>
    </div>
  )
}