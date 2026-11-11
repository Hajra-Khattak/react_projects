import Button from '../Button/Button'

export default function EmptyState({ title, text, actionLabel, onAction }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 text-center">
      <p className="text-base font-semibold text-gray-900 dark:text-white">{title}</p>
      {text && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{text}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-5">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}