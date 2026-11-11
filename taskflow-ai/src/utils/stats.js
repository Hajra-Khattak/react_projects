import { toKey, addDays, formatKey } from './dates'

// 'YYYY-MM-DD' of the day a done task was completed, or null
function completedKey(task, timeZone) {
  if (task.status !== 'done') return null
  const date = task.completedAt?.toDate?.()
  return date ? toKey(date, timeZone) : null
}

// [{ key, label, full, count }] for the last `days` days, ending today
export function completedPerDay(tasks, today, timeZone, days = 7) {
  const counts = {}
  tasks.forEach((t) => {
    const key = completedKey(t, timeZone)
    if (key) counts[key] = (counts[key] || 0) + 1
  })

  return Array.from({ length: days }, (_, i) => {
    const key = addDays(today, i - (days - 1))
    return {
      key,
      label: formatKey(key, { weekday: 'short' }),
      full: formatKey(key, { weekday: 'long', month: 'short', day: 'numeric' }),
      count: counts[key] || 0,
    }
  })
}

// How many tasks were completed on the given days (for example, Monday to Sunday)
export function completedInDays(tasks, dayKeys, timeZone) {
  return tasks.filter((t) => dayKeys.includes(completedKey(t, timeZone))).length
}