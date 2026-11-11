import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { useTheme } from '../../context/ThemeContext'
import Skeleton from '../Skeleton/Skeleton'

export default function TasksCompletedChart({ data, loading }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const tickColor = dark ? '#9ca3af' : '#6b7280'
  const gridColor = dark ? '#374151' : '#e5e7eb'
  const total = data.reduce((sum, d) => sum + d.count, 0)

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Tasks completed</h2>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-5">
        {loading
          ? 'Last 7 days'
          : `${total} ${total === 1 ? 'task' : 'tasks'} in the last 7 days`}
      </p>

      {loading ? (
        <Skeleton className="h-64 w-full" />
      ) : (
        <>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: tickColor, fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  domain={[0, (max) => Math.max(max, 3)]}
                  tick={{ fill: tickColor, fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)' }}
                  labelFormatter={(_, payload) => payload?.[0]?.payload?.full}
                  formatter={(value) => [value, 'Completed']}
                  contentStyle={{
                    backgroundColor: dark ? '#1f2937' : '#ffffff',
                    border: `1px solid ${gridColor}`,
                    borderRadius: 8,
                    color: dark ? '#f9fafb' : '#111827',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {total === 0 && (
            <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
              No completed tasks yet. Move a task to Done and it shows up here.
            </p>
          )}
        </>
      )}
    </section>
  )
}