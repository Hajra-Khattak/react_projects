import React, { useState, useContext } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import { ThemeContext, useTheme } from "../../context/ThemeContext"



export default function Header() {
    const { user, loading } = useAuth()
    // const { darkMode, toggleTheme } = useTheme();
    const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
    return (
        <>
            {/* <div className="flex flex-col"> */}

            {/* Header */}
            <span>{loading ? 'Checking...' : user ? user.email : 'Not logged in'}</span>

            <header className="bg-gray-900 text-white px-8 py-5">
                <nav className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        Habit Tracker
                    </h1>

                    <ul className="flex gap-6">
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                        <li>    
                            <Link to="login" className="hover:text-blue-400"> Login</Link>
                        </li>
                        <li>

                            {/* Dark / Light Mode Toggle */}


                            <div
                                className="relative flex items-center w-[76px] h-8 p-1 rounded-full
                 bg-gray-200 dark:bg-gray-800 border border-gray-300
                 dark:border-gray-700 shadow-inner"
                            >
                                {/* Sliding highlight */}
                                <span
                                    className={`absolute top-1 left-1 w-8 h-6 rounded-full bg-white dark:bg-gray-600
                    shadow transition-transform duration-300
                    ${isDark ? "translate-x-[32px]" : "translate-x-0"}`}
                                />

                                {/* Sun button -> light mode */}
                                <button
                                    type="button"
                                    aria-label="Light mode"
                                    aria-pressed={!isDark}
                                    onClick={() => setTheme("light")}
                                    className="relative z-10 flex items-center justify-center w-8 h-6"
                                >
                                    <svg
                                        className={`w-5 h-5 transition-colors ${!isDark ? "text-yellow-500" : "text-gray-500"
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

                                {/* Moon button -> dark mode */}
                                <button
                                    type="button"
                                    aria-label="Dark mode"
                                    aria-pressed={isDark}
                                    onClick={() => setTheme("dark")}
                                    className="relative z-10 flex items-center justify-center w-8 h-6 ml-auto"
                                >
                                    <svg
                                        className={`w-5 h-5 transition-colors ${isDark ? "text-blue-400" : "text-gray-500"
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


                        </li>
                    </ul>
                </nav>
            </header>
            {/* </div> */}

        </>
    )
}
