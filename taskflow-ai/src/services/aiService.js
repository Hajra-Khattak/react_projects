import { auth } from './firebase'

// Asks the serverless function for subtasks. Returns an array of strings.
export async function suggestSubtasks({ title, description }, signal) {
  const user = auth.currentUser
  if (!user) throw new Error('Please log in again.')

  const token = await user.getIdToken()

  let res
  try {
    res = await fetch('/api/breakdown', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description: description || '' }),
      signal,
    })
  } catch (err) {
    if (err.name === 'AbortError') throw err
    throw new Error('Could not reach the server. Check your internet connection.')
  }

  let data = null
  try {
    data = await res.json()
  } catch {
    // the reply was not JSON
  }

  if (res.status === 404) {
    throw new Error('The AI endpoint was not found. Start the app with "vercel dev".')
  }
  if (!res.ok) {
    throw new Error(data?.error || 'The AI helper is not available right now.')
  }

  return Array.isArray(data?.subtasks) ? data.subtasks : []
}