import { useTimeZone } from '../../context/TimeZoneContext'

function getZoneList() {
  let list = []
  try {
    if (typeof Intl.supportedValuesOf === 'function') {
      list = Intl.supportedValuesOf('timeZone')
    }
  } catch {
    list = []
  }
  if (!list.includes('UTC')) list = ['UTC', ...list]
  return list
}

const zones = getZoneList()

export default function TimeZoneSelect() {
  const { setting, setTimeZone, browserZone } = useTimeZone()
  const options = setting === 'auto' || zones.includes(setting) ? zones : [setting, ...zones]

  return (
    <div className="px-3 py-2">
      <label
        htmlFor="timezone"
        className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1"
      >
        Time zone
      </label>
      <select
        id="timezone"
        value={setting}
        onChange={(e) => setTimeZone(e.target.value)}
        className="w-full px-2 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="auto">Device ({browserZone.replace(/_/g, ' ')})</option>
        {options.map((z) => (
          <option key={z} value={z}>
            {z.replace(/_/g, ' ')}
          </option>
        ))}
      </select>
    </div>
  )
}