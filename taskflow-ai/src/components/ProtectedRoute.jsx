import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Spinner from './Spinner/Spinner'


export default function ProtectedRoute() {
  const { user, loading } = useAuth()

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-400">
//         Loading...
//       </div>
//     )
//   }
if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <Spinner size="lg" />
    </div>
  )
}

  return user ? <Outlet /> : <Navigate to="/login" replace />
}