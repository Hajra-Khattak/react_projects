import { toKey, addDays, daysBetween } from './dates'

// Consecutive days up to today. If today isn't checked yet, counting starts from yesterday.
export function currentStreak(dates = [], today) {
  const set = new Set(dates)
  let key = set.has(today) ? today : addDays(today, -1)
  let count = 0

  while (set.has(key)) {
    count++
    key = addDays(key, -1)
  }
  return count
}

// Longest run of consecutive days ever
export function bestStreak(dates = []) {
  const sorted = [...new Set(dates)].sort()
  let best = 0
  let run = 0
  let prev = null

  for (const key of sorted) {
    run = prev && daysBetween(prev, key) === 1 ? run + 1 : 1
    best = Math.max(best, run)
    prev = key
  }
  return best
}

// { '2026-11-04': 3, ... } = completed tasks + habit check-ins per day
export function buildCounts(tasks, habits, timeZone) {
  const counts = {}

  tasks.forEach((t) => {
    const date = t.completedAt?.toDate?.()
    if (date) {
      const key = toKey(date, timeZone)
      counts[key] = (counts[key] || 0) + 1
    }
  })

  habits.forEach((h) => {
    ;(h.completedDates || []).forEach((key) => {
      counts[key] = (counts[key] || 0) + 1
    })
  })

  return counts
}