import React from 'react'
import { Link } from "react-router";

export default function NotFound() {
  return (
     <div className="relative min-h-screen overflow-hidden bg-[#080b18] flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-purple-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M12 22a10 10 0 110-20 10 10 0 010 20z"
              />
            </svg>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-black tracking-widest bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mt-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-md mx-auto leading-7">
          The page you're looking for doesn't exist,
          has been moved, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:scale-105 hover:shadow-purple-500/40 transition duration-300"
          >
            ← Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/15 text-gray-300 hover:bg-white/10 hover:text-white transition duration-300"
          >
            Go Back
          </button>

        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="text-gray-500 text-sm">
            © 2026 TaskFlow. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  )
}
