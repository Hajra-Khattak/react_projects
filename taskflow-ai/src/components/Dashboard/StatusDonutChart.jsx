import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import { useTheme } from '../../context/ThemeContext'
import { columnsMeta } from '../../utils/constants'
import Skeleton from '../Skeleton/Skeleton'

const colors = {
  todo: '#9ca3af',
  doing: '#3b82f6',
  done: '#22c55e',
}

export default function StatusDonutChart({ tasks, loading }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const total = tasks.length
  const data = columnsMeta.map((col) => ({
    key: col.key,
    name: col.name,
    value: tasks.filter((t) => t.status === col.key).length,
    color: colors[col.key],
  }))

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Tasks by status</h2>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-5">
        Where your tasks are right now
      </p>

      {loading ? (
        <Skeleton className="h-64 w-full" />
      ) : total === 0 ? (
        <div className="h-64 flex items-center justify-center text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No tasks yet. Add a task and it shows up here.
          </p>
        </div>
      ) : (
        <>
          <div className="relative h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.filter((d) => d.value > 0)}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="62%"
                  outerRadius="90%"
                  paddingAngle={3}
                  stroke="none"
                >
                  {data
                    .filter((d) => d.value > 0)
                    .map((d) => (
                      <Cell key={d.key} fill={d.color} />
                    ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [value, name]}
                  contentStyle={{
                    backgroundColor: dark ? '#1f2937' : '#ffffff',
                    border: `1px solid ${dark ? '#374151' : '#e5e7eb'}`,
                    borderRadius: 8,
                    color: dark ? '#f9fafb' : '#111827',
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Total in the middle */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{total}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {total === 1 ? 'task' : 'tasks'}
              </span>
            </div>
          </div>

          {/* Legend */}
          <ul className="mt-5 space-y-2">
            {data.map((d) => (
              <li key={d.key} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  {d.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {d.value} ({Math.round((d.value / total) * 100)}%)
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}