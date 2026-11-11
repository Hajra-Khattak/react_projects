import { addDays, weekdayIndex, daysBetween, formatKey } from '../../utils/dates'
import { useTimeZone } from '../../context/TimeZoneContext'

// 0 = none, 1 = 1, 2 = 2-3, 3 = 4-5, 4 = 6+
const levelStyle = [
  'bg-gray-100 dark:bg-gray-800',
  'bg-blue-200 dark:bg-blue-900',
  'bg-blue-300 dark:bg-blue-700',
  'bg-blue-500 dark:bg-blue-500',
  'bg-blue-700 dark:bg-blue-300',
]

const legend = ['0', '1', '2-3', '4-5', '6+']
const dayLabels = ['Mon', '', 'Wed', '', 'Fri', '', '']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getLevel(count) {
  if (count === 0) return 0
  if (count === 1) return 1
  if (count <= 3) return 2
  if (count <= 5) return 3
  return 4
}

function buildWeeks(year, counts, today) {
  const jan1 = `${year}-01-01`
  const start = addDays(jan1, -weekdayIndex(jan1))
  const daysInYear = daysBetween(jan1, `${year + 1}-01-01`)
  const weekCount = Math.ceil((weekdayIndex(jan1) + daysInYear) / 7)
  const weeks = []

  for (let w = 0; w < weekCount; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      const key = addDays(start, w * 7 + d)
      const inYear = key.startsWith(`${year}-`)
      const count = inYear && key <= today ? counts[key] || 0 : 0
      days.push({ key, inYear, count })
    }
    weeks.push(days)
  }
  return weeks
}

export default function ActivityStreak({ counts = {}, stats = {}, showStats = true }) {
  const { today } = useTimeZone()
  const year = Number(today.slice(0, 4))
  const weeks = buildWeeks(year, counts, today)
  const totalActivity = weeks.flat().reduce((sum, day) => sum + day.count, 0)

  const sideStats = [
    { label: 'Current streak', value: String(stats.current ?? 0), unit: 'days', color: 'text-orange-600 dark:text-orange-400' },
    { label: 'Longest streak', value: String(stats.longest ?? 0), unit: 'days', color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Weekly goal', value: `${stats.consistency ?? 0}%`, unit: 'this week', color: 'text-green-600 dark:text-green-400' },
  ]

  return (
    <div className="flex flex-col xl:flex-row gap-4">
      {/* Heatmap card */}
      <section className="flex-1 min-w-0 bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Activity ({year})
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {totalActivity} {totalActivity === 1 ? 'activity' : 'activities'} this year
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            {legend.map((label, i) => (
              <div key={label} className="flex items-center gap-1">
                <span className={`w-3 h-3 rounded-sm ${levelStyle[i]}`} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 w-max">
            {/* Day labels */}
            <div className="flex flex-col gap-1 pt-5 pr-1">
              {dayLabels.map((label, i) => (
                <span
                  key={i}
                  className="h-3 text-[10px] leading-3 text-gray-500 dark:text-gray-400"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Weeks */}
            <div className="flex gap-1">
              {weeks.map((days, w) => {
                const firstOfMonth = days.find((d) => d.inYear && d.key.endsWith('-01'))
                return (
                  <div key={w} className="flex flex-col gap-1">
                    <span className="h-4 text-[10px] leading-4 text-gray-500 dark:text-gray-400 overflow-visible whitespace-nowrap">
                      {firstOfMonth ? monthNames[Number(firstOfMonth.key.slice(5, 7)) - 1] : ''}
                    </span>

                    {days.map((day) =>
                      day.inYear ? (
                        <span
                          key={day.key}
                          title={`${day.count} ${day.count === 1 ? 'activity' : 'activities'} on ${formatKey(day.key, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}`}
                          className={`w-3 h-3 rounded-sm ${levelStyle[getLevel(day.count)]} ${
                            day.key === today ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-400'
                          }`}
                        />
                      ) : (
                        <span key={day.key} className="w-3 h-3" />
                      )
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Less / More */}
        <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          {levelStyle.map((style, i) => (
            <span key={i} className={`w-3 h-3 rounded-sm ${style}`} />
          ))}
          <span>More</span>
        </div>
      </section>

      {/* Side stat cards */}
      {showStats && (
      <div className="grid grid-cols-3 xl:grid-cols-1 gap-4 xl:w-44">
        {sideStats.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm text-center flex flex-col justify-center"
          >
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {s.unit}
            </p>
            <p className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}