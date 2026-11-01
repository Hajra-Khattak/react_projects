import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

import { useTheme } from "../../context/ThemeContext";


export default function Header() {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <>
            {/* <div className="flex flex-col"> */}

            {/* Header */}

            <header className="bg-gray-900 text-white px-8 py-5">
                <nav className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        MyWebsite
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

                            {/* Dark / Light Mode Toggle */}


                            <button
                            onClick={toggleTheme}
                                type="button"
                                className="relative flex items-center gap-3 w-[76px] h-7 p-1 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-inner transition-all duration-300 hover:shadow-md"
                            >
                                {/* Sun Icon */}
                                <svg
                                    className={`w-5 h-5 text-yellow-500 ml-1"
                                    ${
      darkMode ? "opacity-40" : "opacity-100"
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

                                {/* Moon Icon */}
                                <svg
                                    className={`w-5 h-5 text-blue-400"
                                     ${darkMode ? "opacity-100" : "text-black opacity-60"
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


                        </li>
                    </ul>
                </nav>
            </header>
            {/* </div> */}

        </>
    )
}
