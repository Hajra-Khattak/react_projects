import { useOutletContext } from 'react-router'
import StatCards from '../../components/Dashboard/StatCards'
import TaskBoard from '../../components/Dashboard/TaskBoard'
import HabitsPanel from '../../components/Dashboard/HabitsPanel'
import WeeklyChart from '../../components/Dashboard/WeeklyChart'
import ActivityStreak from '../../components/Dashboard/ActivityStreak'
import WeeklyHabits from '../../components/Dashboard/WeeklyHabits'

export default function DashboardHome() {
  // const { tasks, visibleTasks, habits, toggleHabit, openForm } = useOutletContext()
  const {
    tasks,
    visibleTasks,
    loadingTasks,
    habits,
    toggleHabit,
    openAdd,
    openEdit,
    askDelete,
  } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Welcome back, Hajra
      </h1>
      <ActivityStreak />
      {/* <div className="mt-8">
  <StatCards tasks={tasks} habits={habits} />
</div> */}
      <div className="mt-6">
        {/* <WeeklyHabits /> */}
        <WeeklyHabits
  habits={habits}
  loading={loadingHabits}
  onToggleDay={toggleHabitDay}
  onAdd={openAdd}
/>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Here is what is happening with your tasks today.
      </p>


      <StatCards tasks={tasks} habits={habits} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="xl:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Task board</h2>
          {/* <TaskBoard tasks={visibleTasks} onAdd={openForm} /> */}
          <TaskBoard
            tasks={visibleTasks}
            loading={loadingTasks}
            onAdd={openAdd}
            onEdit={openEdit}
            onDelete={askDelete}
          />
        </div>

        <div className="space-y-6">
          <HabitsPanel habits={habits} onToggle={toggleHabit} />
          <WeeklyChart />
        </div>
      </div>
    </>
  )
}