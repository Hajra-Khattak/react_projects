import { useOutletContext } from 'react-router'
import ActivityStreak from '../../components/dashboard/ActivityStreak'
import WeeklyHabits from '../../components/dashboard/WeeklyHabits'
import StatCards from '../../components/dashboard/StatCards'
import TaskBoard from '../../components/dashboard/TaskBoard'

export default function DashboardHome() {
  const {
    tasks,
    visibleTasks,
    loadingTasks,
    habits,
    loadingHabits,
    activityCounts,
    activityStats,
    toggleHabitDay,
    openAddHabit,
    openEditHabit,
    askDeleteHabit,
    openAdd,
    openEdit,
    askDelete,
  } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Your activity, habits and tasks for this week.
      </p>

      <ActivityStreak counts={activityCounts} stats={activityStats} />

      <div className="mt-6">
        <WeeklyHabits
          habits={habits}
          loading={loadingHabits}
          onToggleDay={toggleHabitDay}
          onAdd={openAddHabit}
          onEdit={openEditHabit}
          onDelete={askDeleteHabit}
        />
      </div>

      <div className="mt-6">
        <StatCards tasks={tasks} habits={habits} />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-4">Task board</h2>
      <TaskBoard
        tasks={visibleTasks}
        loading={loadingTasks}
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={askDelete}
      />
    </>
  )
}