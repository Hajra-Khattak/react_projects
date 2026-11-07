export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block rounded-full border-gray-300 border-t-blue-600 animate-spin ${sizes[size]} ${className}`}
    />
  )
}