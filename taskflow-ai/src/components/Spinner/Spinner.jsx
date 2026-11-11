const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
}

export default function Spinner({ size = 'md', className = '' }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block rounded-full border-current border-t-transparent animate-spin ${sizes[size]} ${className}`}
    />
  )
}