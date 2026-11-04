import { week } from '../../utils/constants'

export default function WeeklyChart() {
  const maxValue = Math.max(...week.map((d) => d.value))

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Tasks completed</h2>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Last 7 days</p>

      <div className="flex items-end justify-between gap-2 h-40">
        {week.map((d) => (
          <div key={d.day} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">{d.value}</span>
            <div
              className="w-full rounded-t-md bg-blue-500 dark:bg-blue-400"
              style={{ height: `${(d.value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}