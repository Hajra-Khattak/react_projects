const pad = (n) => String(n).padStart(2, '0')

export function getBrowserZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  } catch {
    return 'UTC'
  }
}

export function isValidZone(zone) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: zone })
    return true
  } catch {
    return false
  }
}

// 'YYYY-MM-DD' for a moment in time, as seen in the given time zone
export function toKey(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type).value
  return `${get('year')}-${get('month')}-${get('day')}`
}

export const todayKey = (timeZone) => toKey(new Date(), timeZone)

// Calendar math on 'YYYY-MM-DD' text. UTC has no daylight saving, so every day is exactly 24 hours.
function keyToUtc(key) {
  const [y, m, d] = key.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}

export function addDays(key, n) {
  const date = new Date(keyToUtc(key) + n * 86400000)
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

export function daysBetween(a, b) {
  return Math.round((keyToUtc(b) - keyToUtc(a)) / 86400000)
}

// Monday = 0 ... Sunday = 6
export function weekdayIndex(key) {
  return (new Date(keyToUtc(key)).getUTCDay() + 6) % 7
}

// Shows a key as readable text, for example formatKey(key, { month: 'short', day: 'numeric' })
export function formatKey(key, options) {
  return new Date(keyToUtc(key)).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    ...options,
  })
}

const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

// The week (Monday to Sunday) that contains the given "today" key
export function getWeekDays(today) {
  const monday = addDays(today, -weekdayIndex(today))
  return dayNames.map((name, i) => {
    const key = addDays(monday, i)
    return {
      name,
      day: Number(key.slice(8)),
      key,
      isToday: key === today,
      isFuture: key > today,
    }
  })
}