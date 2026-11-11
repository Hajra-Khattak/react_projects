import React from 'react'
import { Link } from 'react-router'

const iconPaths = {
  check: "m5 12 4 4L19 6",
};

function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.sparkles} />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
    
     {/* Footer */}
      {/* <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          © 2026 MyWebsite. All rights reserved.
        </p>
        <p className="text-gray-400 mt-2">
          Built with React & Tailwind CSS
        </p>
      </footer> */}
        {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-950 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-violet-600 p-2 text-white">
              <Icon name="check" />
            </div>
            <span className="text-lg font-black dark:text-white">
              TaskFlow <span className="text-violet-600">AI</span>
            </span>
          </Link>

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TaskFlow AI by Hajra Khattak
          </p>

          <div className="flex gap-5 text-sm font-semibold text-gray-500">
            <Link to="/login" className="transition hover:text-violet-600">Login</Link>
            <Link to="/signup" className="transition hover:text-violet-600">Register</Link>
          </div>

        </div>
      </footer>
    </>
  )
}
