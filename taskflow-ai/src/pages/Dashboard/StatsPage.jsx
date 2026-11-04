import { useOutletContext } from 'react-router'
import StatCards from '../../components/Dashboard/StatCards'
import WeeklyChart from '../../components/Dashboard/WeeklyChart'
import { columnsMeta } from '../../utils/constants'

export default function StatsPage() {
  const { tasks, habits } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Stats</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        See how your work is going.
      </p>

      <StatCards tasks={tasks} habits={habits} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <WeeklyChart />

        <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Tasks by status</h2>
          <div className="space-y-4">
            {columnsMeta.map((col) => {
              const count = tasks.filter((t) => t.status === col.key).length
              const percent = tasks.length === 0 ? 0 : Math.round((count / tasks.length) * 100)
              return (
                <div key={col.key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{col.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{count} ({percent}%)</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className={`h-2.5 rounded-full ${col.bar}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}