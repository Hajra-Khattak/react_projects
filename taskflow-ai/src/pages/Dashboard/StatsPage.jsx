import { useOutletContext } from 'react-router'
import StatsSummary from '../../components/Dashboard/StatsSummary'
import TasksCompletedChart from '../../components/Dashboard/TasksCompletedChart'
import StatusDonutChart from '../../components/Dashboard/StatusDonutChart'
import { useTimeZone } from '../../context/TimeZoneContext'
import { getWeekDays } from '../../utils/dates'
import { completedPerDay, completedInDays } from '../../utils/stats'

export default function StatsPage() {
  const { tasks, loadingTasks, activityStats } = useOutletContext()
  const { today, timeZone } = useTimeZone()

  const weekKeys = getWeekDays(today).map((d) => d.key)
  const chartData = completedPerDay(tasks, today, timeZone, 7)

  const total = tasks.length
  const completedWeek = completedInDays(tasks, weekKeys, timeZone)
  const doneCount = tasks.filter((t) => t.status === 'done').length
  const rate = total === 0 ? 0 : Math.round((doneCount / total) * 100)

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Stats</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        See how your work is going.
      </p>

      <StatsSummary
        total={total}
        completedWeek={completedWeek}
        longest={activityStats.longest}
        rate={rate}
        loading={loadingTasks}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <TasksCompletedChart data={chartData} loading={loadingTasks} />
        </div>
        <StatusDonutChart tasks={tasks} loading={loadingTasks} />
      </div>
    </>
  )
}