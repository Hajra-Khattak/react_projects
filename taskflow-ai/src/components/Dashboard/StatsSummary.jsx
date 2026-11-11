import Skeleton from '../Skeleton/Skeleton'

export default function StatsSummary({ total, completedWeek, longest, rate, loading }) {
  const cards = [
    {
      label: 'Total tasks',
      value: total,
      note: 'Across all columns',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/40',
    },
    {
      label: 'Completed this week',
      value: completedWeek,
      note: 'Monday to Sunday',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-100 dark:bg-green-900/40',
    },
    {
      label: 'Longest streak',
      value: `${longest} ${longest === 1 ? 'day' : 'days'}`,
      note: 'Best habit streak',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-900/40',
    },
    {
      label: 'Completion rate',
      value: `${rate}%`,
      note: 'Tasks in Done',
      color: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-100 dark:bg-orange-900/40',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">{c.label}</p>
            <span className={`w-9 h-9 rounded-lg ${c.bg}`} />
          </div>

          {loading ? (
            <Skeleton className="h-9 w-20 mt-3" />
          ) : (
            <p className={`mt-3 text-3xl font-bold ${c.color}`}>{c.value}</p>
          )}

          <p className="mt-1 text-xs text-gray-500">{c.note}</p>
        </div>
      ))}
    </div>
  )
}