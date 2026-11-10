import { useOutletContext } from 'react-router'
import WeeklyHabits from '../../components/Dashboard/WeeklyHabits'

export default function HabitsPage() {
  const {
    habits,
    loadingHabits,
    toggleHabitDay,
    openAddHabit,
    openEditHabit,
    askDeleteHabit,
  } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Habits</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Check in every day to build your streaks.
      </p>
      <WeeklyHabits
        habits={habits}
        loading={loadingHabits}
        onToggleDay={toggleHabitDay}
        onAdd={openAddHabit}
        onEdit={openEditHabit}
        onDelete={askDeleteHabit}
      />
    </>
  )
}