import { useOutletContext } from 'react-router'
import HabitsPanel from '../../components/Dashboard/HabitsPanel'

export default function HabitsPage() {
  const { habits, toggleHabit } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Habits</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Check in every day to build your streaks.
      </p>
      <div className="max-w-2xl">
        <HabitsPanel habits={habits} onToggle={toggleHabit} />
      </div>
    </>
  )
}