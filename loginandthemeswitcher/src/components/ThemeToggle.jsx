import React from 'react'

export default function ThemeToggle() {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-900 text-right absolute top-3 right-4'>
        <label class="inline-flex items-center gap-3 cursor-pointer">
  <span class="text-sm font-medium text-gray-700 dark:text-white">Light Mood  </span>
  <input type="checkbox" class="sr-only peer" />
  <div class="relative w-11 h-6 bg-pink-300 rounded-full peer-checked:bg-pink-500 transition-colors
              after:content-[''] after:absolute after:top-0.5 after:left-0.5
              after:w-5 after:h-5 after:bg-white after:rounded-full
              after:transition-transform peer-checked:after:translate-x-5"></div>
  <span class="text-sm font-medium text-gray-700 dark:text-white">Dark Mood  </span>
</label>
    </div>
    </>
  )
}
