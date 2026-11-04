// src/components/Input/Input.jsx
export default function Input({
  label,
  id,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 rounded-lg border
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-60 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
        `}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}