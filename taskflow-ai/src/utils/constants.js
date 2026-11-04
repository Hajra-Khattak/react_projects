export const columnsMeta = [
  { key: 'todo', name: 'To Do', dot: 'bg-gray-400', bar: 'bg-gray-400' },
  { key: 'doing', name: 'Doing', dot: 'bg-blue-500', bar: 'bg-blue-500' },
  { key: 'done', name: 'Done', dot: 'bg-green-500', bar: 'bg-green-500' },
]

export const priorityStyle = {
  High: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Low: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
}

export const initialTasks = [
  { id: 1, title: 'Design landing page', status: 'todo', priority: 'High', due: '2026-11-03' },
  { id: 2, title: 'Write project README', status: 'todo', priority: 'Low', due: '2026-11-08' },
  { id: 3, title: 'Build login form', status: 'doing', priority: 'High', due: '2026-11-02' },
  { id: 4, title: 'Create navbar menu', status: 'doing', priority: 'Medium', due: '2026-11-04' },
  { id: 5, title: 'Set up Firebase', status: 'done', priority: 'High', due: '2026-10-30' },
  { id: 6, title: 'Install Tailwind', status: 'done', priority: 'Low', due: '2026-10-29' },
]

export const initialHabits = [
  { id: 1, name: 'Code for 1 hour', streak: 9, done: true },
  { id: 2, name: 'Read 10 pages', streak: 4, done: false },
  { id: 3, name: 'Walk 20 minutes', streak: 2, done: false },
  { id: 4, name: 'Drink 8 glasses of water', streak: 6, done: true },
]

export const week = [
  { day: 'Mon', value: 3 },
  { day: 'Tue', value: 5 },
  { day: 'Wed', value: 2 },
  { day: 'Thu', value: 6 },
  { day: 'Fri', value: 4 },
  { day: 'Sat', value: 7 },
  { day: 'Sun', value: 1 },
]