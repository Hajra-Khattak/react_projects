import { createContext, useContext, useEffect, useState } from 'react'
import { getBrowserZone, isValidZone, todayKey } from '../utils/dates'

const TimeZoneContext = createContext()

export function TimeZoneProvider({ children }) {
  const [browserZone, setBrowserZone] = useState(getBrowserZone)

  // 'auto' means "use the device's time zone"
  const [setting, setSettingState] = useState(() => {
    try {
      const saved = localStorage.getItem('timeZone')
      return saved && saved !== 'auto' && isValidZone(saved) ? saved : 'auto'
    } catch {
      return 'auto'
    }
  })

  const timeZone = setting === 'auto' ? browserZone : setting
  const [today, setToday] = useState(() => todayKey(timeZone))

  const setTimeZone = (value) => {
    setSettingState(value)
    try {
      localStorage.setItem('timeZone', value)
    } catch {
      // storage can be blocked, the choice then lasts until the page closes
    }
  }

  // Keeps "today" correct at midnight, when the zone changes, and when the tab wakes up
  useEffect(() => {
    const update = () => {
      setBrowserZone(getBrowserZone())
      setToday(todayKey(timeZone))
    }
    update()
    const id = setInterval(update, 30000)
    document.addEventListener('visibilitychange', update)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', update)
    }
  }, [timeZone])

  return (
    <TimeZoneContext.Provider value={{ timeZone, setting, setTimeZone, browserZone, today }}>
      {children}
    </TimeZoneContext.Provider>
  )
}

export function useTimeZone() {
  return useContext(TimeZoneContext)
}