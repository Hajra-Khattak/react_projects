export default function StatCards({ tasks, habits }) {
  const total = tasks.length
  const doing = tasks.filter((t) => t.status === 'doing').length
  const done = tasks.filter((t) => t.status === 'done').length
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)
  const bestStreak = Math.max(0, ...habits.map((h) => h.best))

  const stats = [
    { label: 'Total tasks', value: total, note: 'All columns', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
    { label: 'In progress', value: doing, note: 'Being worked on', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/40' },
    { label: 'Completed', value: done, note: `${percent}% done`, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/40' },
    { label: 'Best streak', value: `${bestStreak} days`, note: 'Keep it going', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
            <span className={`w-9 h-9 rounded-lg ${s.bg}`} />
          </div>
          <p className={`mt-3 text-3xl font-bold ${s.color}`}>{s.value}</p>
          <p className="mt-1 text-xs text-gray-500">{s.note}</p>
        </div>
      ))}
    </div>
  )
}