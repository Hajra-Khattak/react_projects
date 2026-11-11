import Spinner from '../Spinner/Spinner'

const variants = {
  primary: 'rounded-lg bg-blue-600 hover:bg-blue-700 text-white',
  secondary:
    'rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white',
  outline:
    'rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800',
  danger: 'rounded-lg bg-red-600 hover:bg-red-700 text-white',
  gradient:
    'rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-inset ring-white/20 hover:from-emerald-600 hover:to-emerald-800 active:scale-[0.98]',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
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
      className={`inline-flex items-center justify-center gap-2 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      {loading && <Spinner size="sm" />}
      {loading ? 'Please wait...' : children}
    </button>
  )
}