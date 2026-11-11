import { useOutletContext } from 'react-router'
import StreakOverview from '../../components/Dashboard/StreakOverview'
import ActivityStreak from '../../components/Dashboard/ActivityStreak'
import WeeklyHabits from '../../components/Dashboard/WeeklyHabits'
import StatCards from '../../components/Dashboard/StatCards'
import TaskBoard from '../../components/Dashboard/TaskBoard'
import EmptyState from '../../components/EmptyState/EmptyState'

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
    moveTasks,
    breakDownTask,
  } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Your activity, habits and tasks for this week.
      </p>

      <StreakOverview habits={habits} counts={activityCounts} stats={activityStats} />

      <ActivityStreak counts={activityCounts} stats={activityStats} showStats={false} />

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

      {!loadingTasks && tasks.length === 0 && (
  <div className="mt-8">
    <EmptyState
      title="No tasks yet"
      text="Add your first task, then drag it across the board as you work."
      actionLabel="+ Add your first task"
      onAction={() => openAdd('todo')}
    />
  </div>
)}

      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-4">Task board</h2>
      <TaskBoard
        tasks={visibleTasks}
        loading={loadingTasks}
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={askDelete}
        onMove={moveTasks}
        onBreakdown={breakDownTask}
      />
    </>
  )
}