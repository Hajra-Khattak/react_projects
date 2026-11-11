import { useOutletContext } from 'react-router'
import HabitCard from '../../components/Dashboard/HabitCard'
import WeeklyHabits from '../../components/Dashboard/WeeklyHabits'
import Button from '../../components/Button/Button'
import Skeleton from '../../components/Skeleton/Skeleton'
import { useTimeZone } from '../../context/TimeZoneContext'
import { getWeekDays } from '../../utils/dates'

export default function HabitsPage() {
  const {
    habits,
    loadingHabits,
    activityStats,
    toggleHabitDay,
    openAddHabit,
    openEditHabit,
    askDeleteHabit,
  } = useOutletContext()
  const { today } = useTimeZone()

  const weekKeys = getWeekDays(today).map((d) => d.key)
  const doneToday = habits.filter((h) => h.done).length

  const summary = [
    { label: 'Done today', value: `${doneToday}/${habits.length}`, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Current streak', value: `${activityStats.current} days`, color: 'text-orange-600 dark:text-orange-400' },
    { label: 'Best streak', value: `${activityStats.longest} days`, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Weekly goal', value: `${activityStats.consistency}%`, color: 'text-green-600 dark:text-green-400' },
  ]

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Habits</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Check in every day to build your streaks.
          </p>
        </div>

        <Button onClick={openAddHabit} className="shrink-0">
          + New habit
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {summary.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
            <p className={`mt-2 text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Habit cards */}
      {loadingHabits ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
        </div>
      ) : habits.length === 0 ? (
        <EmptyState
  title="No habits yet"
  text="Add your first habit and check in every day to build a streak."
  actionLabel="+ New habit"
  onAction={openAddHabit}
/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              today={today}
              weekKeys={weekKeys}
              onCheckIn={(h) => toggleHabitDay(h, today)}
              onEdit={openEditHabit}
              onDelete={askDeleteHabit}
            />
          ))}
        </div>
      )}

      {/* Weekly grid, for checking past days */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-10 mb-4">
        This week
      </h2>
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