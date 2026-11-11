import { addDays, formatKey } from '../../utils/dates'
import { useTimeZone } from '../../context/TimeZoneContext'

const milestones = [3, 7, 14, 30, 60, 100, 200, 365]

const flamePath =
  'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'

const trophyPath =
  'M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z'

function Icon({ path, className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

export default function StreakOverview({ habits = [], counts = {}, stats = {} }) {
  const { today } = useTimeZone()

  const current = stats.current ?? 0
  const longest = stats.longest ?? 0

  // Progress toward the next milestone
  const next = milestones.find((m) => m > current) ?? null
  const previous = [...milestones].reverse().find((m) => m <= current) ?? 0
  const percent = next ? Math.round(((current - previous) / (next - previous)) * 100) : 100

  // Last 7 days: a day is active if any task or habit was completed on it
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const key = addDays(today, i - 6)
    return {
      key,
      label: formatKey(key, { weekday: 'narrow' }),
      active: (counts[key] || 0) > 0,
      isToday: key === today,
    }
  })

  // Habits ranked by current streak
  const ranked = [...habits].sort((a, b) => b.streak - a.streak || b.best - a.best).slice(0, 3)

  // A streak is at risk when a habit has a streak but isn't checked in today
  const atRisk = habits.some((h) => h.streak > 0 && !h.done)

  let longestNote = 'Check in to start your first streak.'
  if (longest > 0) {
    longestNote =
      current >= longest
        ? 'You are at your record. Keep going!'
        : `${longest - current} more ${longest - current === 1 ? 'day' : 'days'} to beat it`
  }

  return (
    <section className="mb-6">
      {atRisk && (
        <p className="mb-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-sm px-4 py-3">
          Check in today to keep your {current}-day streak going.
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Current streak */}
        <div className="rounded-xl p-5 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-orange-100">
            <Icon path={flamePath} className="w-5 h-5" />
            Current streak
          </div>

          <p className="mt-3 text-5xl font-extrabold leading-none">
            {current}
            <span className="ml-2 text-lg font-semibold text-orange-100">
              {current === 1 ? 'day' : 'days'}
            </span>
          </p>

          {/* Last 7 days */}
          <div className="mt-5 flex items-center justify-between gap-1">
            {last7.map((d) => (
              <div key={d.key} className="flex flex-col items-center gap-1">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    d.active ? 'bg-white text-orange-600' : 'bg-white/20 text-white/70'
                  } ${d.isToday ? 'ring-2 ring-white ring-offset-2 ring-offset-orange-500' : ''}`}
                >
                  {d.active ? '✓' : ''}
                </span>
                <span className="text-[10px] text-orange-100">{d.label}</span>
              </div>
            ))}
          </div>

          {/* Next milestone */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-orange-100 mb-1">
              <span>{next ? `Next goal: ${next} days` : 'Top milestone reached'}</span>
              <span>{percent}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/25">
              <div
                className="h-2 rounded-full bg-white transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Longest streak */}
        <div className="rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            <Icon path={trophyPath} className="w-5 h-5" />
            Longest streak
          </div>

          <p className="mt-3 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
            {longest}
            <span className="ml-2 text-lg font-semibold text-gray-500 dark:text-gray-400">
              {longest === 1 ? 'day' : 'days'}
            </span>
          </p>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{longestNote}</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
              <p className="text-xl font-bold text-green-600 dark:text-green-400">
                {stats.consistency ?? 0}%
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Weekly goal</p>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {habits.filter((h) => h.done).length}/{habits.length}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Done today</p>
            </div>
          </div>
        </div>

        {/* Top habit streaks */}
        <div className="rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">
            Top habit streaks
          </p>

          {ranked.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Add a habit to see its streak here.
            </p>
          ) : (
            <ul className="space-y-3">
              {ranked.map((h, i) => (
                <li key={h.id} className="flex items-center gap-3">
                  <span className="w-5 text-sm font-bold text-gray-400">{i + 1}</span>
                  <span
                    className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold text-white ${h.color}`}
                  >
                    {h.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {h.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Best: {h.best} days</p>
                  </div>
                  <span className="text-sm font-bold text-orange-600 dark:text-orange-400 whitespace-nowrap">
                    {h.streak}d
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}