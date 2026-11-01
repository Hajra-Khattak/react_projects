const stats = [
  { label: 'Total tasks', value: '24', note: '+3 this week', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
  { label: 'In progress', value: '6', note: '2 due today', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/40' },
  { label: 'Completed', value: '15', note: '62% done', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/40' },
  { label: 'Best streak', value: '9 days', note: 'Keep it going', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
]

const columns = [
  {
    name: 'To Do',
    dot: 'bg-gray-400',
    tasks: [
      { title: 'Design landing page', priority: 'High', due: 'Nov 3' },
      { title: 'Write project README', priority: 'Low', due: 'Nov 8' },
      { title: 'Plan Firestore data', priority: 'Medium', due: 'Nov 5' },
    ],
  },
  {
    name: 'Doing',
    dot: 'bg-blue-500',
    tasks: [
      { title: 'Build login form', priority: 'High', due: 'Nov 2' },
      { title: 'Create navbar menu', priority: 'Medium', due: 'Nov 4' },
    ],
  },
  {
    name: 'Done',
    dot: 'bg-green-500',
    tasks: [
      { title: 'Set up Firebase', priority: 'High', due: 'Oct 30' },
      { title: 'Install Tailwind', priority: 'Low', due: 'Oct 29' },
    ],
  },
]

const priorityStyle = {
  High: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Low: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
}

const habits = [
  { name: 'Code for 1 hour', streak: 9, done: true },
  { name: 'Read 10 pages', streak: 4, done: false },
  { name: 'Walk 20 minutes', streak: 2, done: false },
  { name: 'Drink 8 glasses of water', streak: 6, done: true },
]

const week = [
  { day: 'Mon', value: 3 },
  { day: 'Tue', value: 5 },
  { day: 'Wed', value: 2 },
  { day: 'Thu', value: 6 },
  { day: 'Fri', value: 4 },
  { day: 'Sat', value: 7 },
  { day: 'Sun', value: 1 },
]

export default function Dashboard() {
  const maxValue = Math.max(...week.map((d) => d.value))

  return (
    <section className="bg-gray-50 dark:bg-gray-950 min-h-screen px-4 sm:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, Hajra
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Here is what is happening with your tasks today.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="search"
              placeholder="Search tasks..."
              className="w-full sm:w-56 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="shrink-0 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
              + New task
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
                <span className={`w-9 h-9 rounded-lg ${s.bg}`} />
              </div>
              <p className={`mt-3 text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Main grid: board + side panels */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Kanban board */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Task board</h2>
              <select className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <option>All priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {columns.map((col) => (
                <div
                  key={col.name}
                  className="bg-gray-100 dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between px-1 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{col.name}</h3>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {col.tasks.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {col.tasks.map((task) => (
                      <div
                        key={task.title}
                        className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 cursor-grab"
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityStyle[task.priority]}`}>
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Due {task.due}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-3 w-full text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition">
                    + Add task
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Side panels */}
          <div className="space-y-6">
            {/* Habits */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Today's habits</h2>
                <span className="text-xs text-gray-500 dark:text-gray-400">2 of 4 done</span>
              </div>

              <ul className="space-y-3">
                {habits.map((h) => (
                  <li
                    key={h.name}
                    className="flex items-center justify-between gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs ${
                          h.done
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        {h.done ? '✓' : ''}
                      </span>
                      <span
                        className={`text-sm ${
                          h.done
                            ? 'line-through text-gray-400'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {h.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 whitespace-nowrap">
                      {h.streak} day streak
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-4 w-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                + Add habit
              </button>
            </div>

            {/* Weekly chart */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Tasks completed
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">Last 7 days</p>

              <div className="flex items-end justify-between gap-2 h-40">
                {week.map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                    <span className="text-xs text-gray-600 dark:text-gray-400">{d.value}</span>
                    <div
                      className="w-full rounded-t-md bg-blue-500 dark:bg-blue-400"
                      style={{ height: `${(d.value / maxValue) * 100}%` }}
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI helper */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-sm">
              <h2 className="text-lg font-semibold">AI task helper</h2>
              <p className="text-sm text-blue-100 mt-1">
                Describe a big goal and get a list of small steps.
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition">
                Break down a task
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}