
import { Link } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

export default function Header() {
    const { user, loading, logout } = useAuth()
    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        // <div className="overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        <header className="sticky top-0 z-50 border-b border-gray-200/70 dark:border-gray-800 bg-white/85 dark:bg-gray-950 backdrop-blur-xl transition-colors duration-300">

            <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4">

                <div className="flex items-center justify-between gap-4">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">

                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300">

                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2m0 14v2"
                                />
                            </svg>

                        </div>

                        <div>
                            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                TaskFlow <span className="text-blue-500">AI</span>
                            </h1>

                            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
                                Plan · Track · Grow
                            </p>
                        </div>

                    </Link>


                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center gap-1">

                         <Link
                            to="/"
                            className="relative px-4 py-2 text-sm font-semibold
        text-purple-600 dark:text-purple-400
        after:content-[''] after:absolute after:bottom-0 after:left-4
        after:w-[calc(100%-2rem)] after:h-0.5
        after:bg-purple-600 dark:after:bg-purple-400"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="relative px-4 py-2 text-sm font-medium
        text-gray-600 dark:text-gray-300
        hover:text-purple-600 dark:hover:text-purple-400
        transition-colors duration-300
        after:content-[''] after:absolute after:bottom-0 after:left-4
        after:w-0 after:h-0.5
        after:bg-purple-600 dark:after:bg-purple-400
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
                        >
                            About
                        </Link>

                        {/* <a
                            href="#features"
                            className="relative px-4 py-2 text-sm font-medium
        text-gray-600 dark:text-gray-300
        hover:text-purple-600 dark:hover:text-purple-400
        transition-colors duration-300
        after:content-[''] after:absolute after:bottom-0 after:left-4
        after:w-0 after:h-0.5
        after:bg-purple-600 dark:after:bg-purple-400
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
                        >
                            Features
                        </a> */}

                        {/* <a
                            href="#services"
                            className="relative px-4 py-2 text-sm font-medium
        text-gray-600 dark:text-gray-300
        hover:text-purple-600 dark:hover:text-purple-400
        transition-colors duration-300
        after:content-[''] after:absolute after:bottom-0 after:left-4
        after:w-0 after:h-0.5
        after:bg-purple-600 dark:after:bg-purple-400
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
                        >
                            Services
                        </a> */}

                        
<Link
  to="/contact"
  className="relative px-4 py-2 text-sm font-medium
    text-gray-600 dark:text-gray-300
    hover:text-purple-600 dark:hover:text-purple-400
    transition-colors duration-300
    after:content-[''] after:absolute after:bottom-0 after:left-4
    after:w-0 after:h-0.5
    after:bg-purple-600 dark:after:bg-purple-400
    after:transition-all after:duration-300
    hover:after:w-[calc(100%-2rem)]"
>
  Contact
</Link>


                    </div>


                    {/* RIGHT SIDE ACTIONS */}
                    <div className="flex items-center gap-3">

                        {/* THEME TOGGLE */}
                        <div className="relative flex items-center w-[76px] h-9 p-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-inner shrink-0">

                            <span
                                className={`absolute top-1 left-1 w-8 h-7 rounded-full bg-white dark:bg-gray-600 shadow-md transition-transform duration-300 ${
                                    isDark ? "translate-x-[32px]" : "translate-x-0"
                                }`}
                            />

                            {/* LIGHT MODE */}
                            <button
                                type="button"
                                aria-label="Light mode"
                                aria-pressed={!isDark}
                                onClick={() => setTheme("light")}
                                className="relative z-10 flex items-center justify-center w-8 h-7"
                            >
                                <svg
                                    className={`w-5 h-5 transition-colors ${
                                        !isDark ? "text-amber-500" : "text-gray-400"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path
                                        strokeLinecap="round"
                                        d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3l1.42 1.42M2 12h2m16 0h2"
                                    />
                                </svg>
                            </button>

                            {/* DARK MODE */}
                            <button
                                type="button"
                                aria-label="Dark mode"
                                aria-pressed={isDark}
                                onClick={() => setTheme("dark")}
                                className="relative z-10 flex items-center justify-center w-8 h-7 ml-auto"
                            >
                                <svg
                                    className={`w-5 h-5 transition-colors ${
                                        isDark ? "text-blue-300" : "text-gray-400"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.9 13A9 9 0 0111 3.1 9 9 0 1020.9 13z"
                                    />
                                </svg>
                            </button>

                        </div>


                        {/* AUTH BUTTON */}
                        <div className="hidden sm:block">

                            {loading ? (
                                <div className="w-20 h-10 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
                            ) : user ? (

                                <button
                                    onClick={logout}
                                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Logout
                                </button>

                            ) : (

                                <Link
                                    to="/login"
                                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Get Started →
                                </Link>

                            )}

                        </div>


                        {/* MOBILE MENU */}
                        <details className="relative lg:hidden group">

                            <summary className="list-none cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 transition">

                                <svg
                                    className="w-6 h-6 group-open:hidden"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <svg
                                    className="w-6 h-6 hidden group-open:block"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                            </summary>


                            <div className="absolute right-0 top-14 w-64 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl mobile-menu">

                                <div className="flex flex-col gap-2">

                                    {[
                                        ["Home", "#home"],
                                        ["About", "#about"],
                                        ["Features", "#features"],
                                        ["Services", "#services"],
                                        ["Contact", "#contact"]
                                    ].map(([label, href]) => (

                                        <a
                                            key={label}
                                            href={href}
                                            className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                        >
                                            {label}
                                        </a>

                                    ))}

                                    <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

                                    {loading ? null : user ? (

                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                                        >
                                            Logout
                                        </button>

                                    ) : (

                                        <Link
                                            to="/login"
                                            className="px-4 py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600"
                                        >
                                            Get Started →
                                        </Link>

                                    )}

                                </div>

                            </div>

                        </details>

                    </div>

                </div>

            </nav>

        </header>
        // </div>
    )
}
