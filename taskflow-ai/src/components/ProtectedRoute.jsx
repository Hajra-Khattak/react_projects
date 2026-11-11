import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Spinner from './Spinner/Spinner'

export default function ProtectedRoute() {
  const { user, loading } = useAuth()

  // Firebase needs a moment to restore the saved login after a refresh
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 text-blue-600 dark:text-blue-400">
        <Spinner size="lg" />
      </div>
    )
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />
}