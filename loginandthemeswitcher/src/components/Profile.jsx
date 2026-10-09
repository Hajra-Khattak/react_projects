import { Navigate, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Profile() {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  if (!user) return <Navigate to="/login" />

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-100 h-110 px-6 ring-gray-900/5">
        <div className="flex flex-col items-center border-b border-pink-400 dark:border-pink-300 pb-4">
          <img
            src="https://images.unsplash.com/vector-1753190326256-1f9c8a7256ee?q=80&w=880&auto=format&fit=crop"
            alt="avatar"
            className="rounded-full w-20"
          />
          <h3 className="text-2xl font-bold dark:text-white text-pink-700">Profile</h3>
        </div>

        <div className="flex flex-col justify-center items-center pt-4">
          <div className="pb-5 flex flex-col">
            <label className="dark:text-white text-pink-600 mb-2">Your Name</label>
            <input
              type="text"
              disabled
              value={user.username}
              className="dark:text-white border rounded-lg px-3 w-75 py-2 border-pink-400 dark:border-white"
            />
          </div>

          <div className="pb-5 flex flex-col">
            <label className="dark:text-white text-pink-600 mb-2">Your Password</label>
            <input
              type="text"
              disabled
              value={user.password}
              className="dark:text-white border rounded-lg px-3 py-2 w-75 border-pink-400 dark:border-white"
            />
          </div>

          <button
            onClick={handleLogout}
            className="border rounded-lg px-3 py-2 w-75 border-pink-400 font-bold bg-pink-500 dark:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}