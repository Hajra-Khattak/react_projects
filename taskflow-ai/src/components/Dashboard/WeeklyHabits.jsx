import { getWeekDays, formatKey } from '../../utils/dates'
import { useTimeZone } from '../../context/TimeZoneContext'

const habits = [
  { name: 'Read 1 hour', letter: 'R', color: 'bg-teal-500', done: [true, true, true, true, true, true, false] },
  { name: 'Drink water', letter: 'W', color: 'bg-yellow-500', done: [true, true, true, true, true, false, false] },
  { name: '100 push-ups', letter: 'P', color: 'bg-red-500', done: [true, true, true, false, false, false, false] },
  { name: 'Code for 1 hour', letter: 'C', color: 'bg-blue-500', done: [true, true, false, true, false, false, false] },
]

const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

// Builds the current week (Monday to Sunday) with plain JavaScript
function getWeek() {
    const { today } = useTimeZone()
const week = getWeekDays(today)
const weekKeys = week.map((d) => d.key)
const monthName = formatKey(today, { month: 'long' })
const yearNumber = today.slice(0, 4)
//   const today = new Date()
  const mondayOffset = (today.getDay() + 6) % 7
  const monday = new Date(today)
  monday.setDate(today.getDate() - mondayOffset)

  return dayNames.map((name, i) => {
    const date = new Date(monday)
    date.setDate(monday.getDate() + i)
    return {
      name,
      day: date.getDate(),
      isToday: date.toDateString() === today.toDateString(),
      isFuture: date > today && date.toDateString() !== today.toDateString(),
    }
  })
}

const week = getWeek()
const monthName = new Date().toLocaleDateString('en-US', { month: 'long' })
const yearNumber = new Date().getFullYear()

export default function WeeklyHabits() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {monthName}{' '}
          <span className="font-normal text-gray-500 dark:text-gray-400">{yearNumber}</span>
        </h2>

        <button
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition"
        >
          <span className="text-base leading-none">+</span>
          New habit
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Day header row */}
          <div className="grid grid-cols-[200px_repeat(7,1fr)] border-b border-gray-100 dark:border-gray-800">
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

          {/* Habit rows */}
          {habits.map((habit) => {
            const doneCount = habit.done.filter(Boolean).length
            return (
              <div
                key={habit.name}
                className="grid grid-cols-[200px_repeat(7,1fr)] items-center border-b last:border-b-0 border-gray-100 dark:border-gray-800"
              >
                {/* Habit name */}
                <div className="flex items-center gap-3 py-4 pr-3">
                  <span
                    className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold text-white ${habit.color}`}
                  >
                    {habit.letter}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {habit.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{doneCount}/7</p>
                  </div>
                </div>

                {/* Day checkboxes */}
                {week.map((d, i) => (
                  <div
                    key={d.name}
                    className="flex items-center justify-center py-4 border-l border-gray-100 dark:border-gray-800"
                  >
                    {habit.done[i] ? (
                      <span className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center shadow-sm">
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
                      </span>
                    ) : (
                      <span
                        className={`w-6 h-6 rounded-md border-2 ${
                          d.isFuture
                            ? 'border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}