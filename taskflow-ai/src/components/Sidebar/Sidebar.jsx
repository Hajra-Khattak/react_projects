import { NavLink, Link } from 'react-router'
import { useTheme } from '../../context/ThemeContext'

const links = [
  { to: '/dashboard', label: 'Overview', end: true, icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
  { to: '/dashboard/tasks', label: 'Tasks', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
  { to: '/dashboard/habits', label: 'Habits', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { to: '/dashboard/stats', label: 'Stats', icon: 'M18 20V10M12 20V4M6 20v-6' },
]

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
    isActive
      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
  }`

export default function Sidebar({ open, onClose }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Dark overlay on phones */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:shrink-0 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-200 dark:border-gray-800">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            TaskFlow AI
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="lg:hidden text-2xl leading-none text-gray-500"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={onClose} className={linkClass}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={l.icon} />
              </svg>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-800 space-y-1">
          <button type="button" onClick={toggleTheme} className={linkClass({ isActive: false }) + ' w-full'}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <Link to="/" className={linkClass({ isActive: false })}>
            Back to website
          </Link>
          {/* Logout: connect to Firebase signOut in Phase 2 */}
          <button
            type="button"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition"
          >
            Log out
          </button>
        </div>
      </aside>
    </>
  )
}