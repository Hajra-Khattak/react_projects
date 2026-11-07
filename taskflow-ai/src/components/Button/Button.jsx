import React from 'react'
import Spinner from '../Spinner/Spinner'

// src/components/Button/Button.jsx
const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-gradient-to-b from-emerald-500 to-emerald-700 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-600 hover:to-emerald-800 hover:shadow-xl hover:shadow-emerald-600/40 ring-1 ring-inset ring-white/20 transition duration-200 ',
  indigo: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
}

const sizes = {
  sm: 'px-6 py-1 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        rounded-lg font-semibold transition
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {/* {loading ? 'Please wait...' : children} */}
      {loading ? (
  <span className="flex items-center justify-center gap-2">
    <Spinner size="sm" />
    Please wait...
  </span>
) : (
  children
)}
      
    </button>
  )
}