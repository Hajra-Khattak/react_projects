import { useOutletContext, useSearchParams } from 'react-router'
import Highlight from '../../components/Highlight/Highlight'
import Skeleton from '../../components/Skeleton/Skeleton'
import { priorityStyle, columnsMeta } from '../../utils/constants'

export default function SearchPage() {
  const { tasks, habits, loadingTasks, loadingHabits, openEdit, openEditHabit } =
    useOutletContext()
  const [params] = useSearchParams()

  const query = (params.get('q') || '').trim()
  const q = query.toLowerCase()

  const statusName = (key) => columnsMeta.find((c) => c.key === key)?.name || key

  const taskResults = q
    ? tasks.filter((t) =>
        [t.title, t.description, t.priority, t.due, statusName(t.status)].some((field) =>
          (field || '').toLowerCase().includes(q)
        )
      )
    : []

  const habitResults = q ? habits.filter((h) => h.name.toLowerCase().includes(q)) : []

  const total = taskResults.length + habitResults.length
  const loading = loadingTasks || loadingHabits

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Search</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        {!query
          ? 'Type in the search box to find tasks and habits.'
          : loading
          ? `Searching for "${query}"...`
          : `${total} ${total === 1 ? 'result' : 'results'} for "${query}"`}
      </p>

      {loading && query && (
        <div className="space-y-3">
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
        </div>
      )}

      {!loading && query && total === 0 && (
        <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Nothing matches "{query}".
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Try a shorter word, or search by priority (High, Medium, Low) or status (Done).
          </p>
        </div>
      )}

      {/* Task results */}
      {!loading && taskResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Tasks <span className="text-sm font-normal text-gray-500">({taskResults.length})</span>
          </h2>

          <ul className="space-y-2">
            {taskResults.map((task) => (
              <li key={task.id}>
                <button
                  type="button"
                  onClick={() => openEdit(task)}
                  className="w-full text-left bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={`text-sm font-medium break-words ${
                        task.status === 'done'
                          ? 'line-through text-gray-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      <Highlight text={task.title} query={query} />
                    </p>
                    <span
                      className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${priorityStyle[task.priority]}`}
                    >
                      <Highlight text={task.priority} query={query} />
                    </span>
                  </div>

                  {task.description && (
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      <Highlight text={task.description} query={query} />
                    </p>
                  )}

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      Status: <Highlight text={statusName(task.status)} query={query} />
                    </span>
                    <span>
                      {task.due ? (
                        <>
                          Due <Highlight text={task.due} query={query} />
                        </>
                      ) : (
                        'No date'
                      )}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Habit results */}
      {!loading && habitResults.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Habits <span className="text-sm font-normal text-gray-500">({habitResults.length})</span>
          </h2>

          <ul className="space-y-2">
            {habitResults.map((habit) => (
              <li key={habit.id}>
                <button
                  type="button"
                  onClick={() => openEditHabit(habit)}
                  className="w-full flex items-center gap-3 text-left bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition"
                >
                  <span
                    className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold text-white ${habit.color}`}
                  >
                    {habit.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      <Highlight text={habit.name} query={query} />
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Goal: {habit.weeklyGoal} days per week
                      {habit.streak > 0 && ` · ${habit.streak} day streak`}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}