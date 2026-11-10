import { getWeekDays, formatKey } from '../../utils/dates'
import { useTimeZone } from '../../context/TimeZoneContext'
import Skeleton from '../Skeleton/Skeleton'

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

export default function WeeklyHabits({ habits, loading, onToggleDay, onAdd, onEdit, onDelete }) {
  const { today } = useTimeZone()
  const week = getWeekDays(today)
  const weekKeys = week.map((d) => d.key)

  const monthName = formatKey(today, { month: 'long' })
  const yearNumber = today.slice(0, 4)

  const weekCount = (h) => h.completedDates.filter((k) => weekKeys.includes(k)).length
  const totalGoal = habits.reduce((sum, h) => sum + h.weeklyGoal, 0)
  const totalDone = habits.reduce((sum, h) => sum + Math.min(h.weeklyGoal, weekCount(h)), 0)

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {monthName}{' '}
            <span className="font-normal text-gray-500 dark:text-gray-400">{yearNumber}</span>
          </h2>
          {habits.length > 0 && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Weekly goal: {totalDone} of {totalGoal} check-ins
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition"
        >
          <span className="text-base leading-none">+</span>
          New habit
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[660px]">
          {/* Day header */}
          <div className="grid grid-cols-[220px_repeat(7,1fr)] border-b border-gray-100 dark:border-gray-800">
            <div />
            {week.map((d) => (
              <div key={d.name} className="py-3 text-center border-l border-gray-100 dark:border-gray-800">
                <p
                  className={`text-[10px] font-semibold tracking-wider ${
                    d.isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {d.name}
                </p>
                <p
                  className={`mt-1 text-xl font-bold ${
                    d.isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {d.day}
                </p>
                <span
                  className={`mx-auto mt-1 block w-1 h-1 rounded-full ${
                    d.isToday ? 'bg-blue-600 dark:bg-blue-400' : 'bg-transparent'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="space-y-3 py-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          )}

          {/* Empty */}
          {!loading && habits.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No habits yet. Add your first one to start a streak.
              </p>
              <button
                type="button"
                onClick={onAdd}
                className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                + New habit
              </button>
            </div>
          )}

          {/* Habit rows */}
          {!loading &&
            habits.map((habit) => {
              const count = weekCount(habit)
              const reached = count >= habit.weeklyGoal
              return (
                <div
                  key={habit.id}
                  className="group grid grid-cols-[220px_repeat(7,1fr)] items-center border-b last:border-b-0 border-gray-100 dark:border-gray-800"
                >
                  {/* Name, progress, edit and delete */}
                  <div className="flex items-center gap-3 py-4 pr-2">
                    <span
                      className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold text-white ${habit.color}`}
                    >
                      {habit.name.charAt(0).toUpperCase()}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {habit.name}
                      </p>
                      <p
                        className={`text-xs ${
                          reached
                            ? 'text-green-600 dark:text-green-400 font-medium'
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {count}/{habit.weeklyGoal} this week
                        {habit.streak > 0 && ` · ${habit.streak} day streak`}
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

                  {/* Day checkboxes */}
                  {week.map((d) => {
                    const checked = habit.completedDates.includes(d.key)
                    return (
                      <div
                        key={d.key}
                        className="flex items-center justify-center py-4 border-l border-gray-100 dark:border-gray-800"
                      >
                        <button
                          type="button"
                          disabled={d.isFuture}
                          onClick={() => onToggleDay(habit, d.key)}
                          aria-label={`${habit.name} on ${d.name} ${d.day}: ${checked ? 'done' : 'not done'}`}
                          aria-pressed={checked}
                          className={`w-6 h-6 rounded-md flex items-center justify-center transition disabled:cursor-not-allowed ${
                            checked
                              ? 'bg-blue-600 shadow-sm'
                              : d.isFuture
                              ? 'border-2 border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'
                              : 'border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500'
                          }`}
                        >
                          {checked && (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}