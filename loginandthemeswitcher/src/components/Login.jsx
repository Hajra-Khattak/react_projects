import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) return
    login(username, password)
    navigate('/profile')
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-100 h-100 px-6 py-10 ring-gray-900/5">
        <div className="flex flex-col justify-center items-center border-b border-pink-400 dark:border-pink-300 pb-4">
          <h3 className="text-2xl font-bold dark:text-white text-pink-700 mt-5">Login Here</h3>
        </div>

        <div className="flex flex-col justify-center items-center pt-4 pb-4">
          <form onSubmit={handleSubmit}>
            <div className="pb-5">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="dark:text-white border rounded-lg px-3 w-75 py-2 border-pink-400 focus:outline-pink-500 dark:border-white"
              />
            </div>

            <div className="pb-5">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:text-white border rounded-lg px-3 py-2 w-75 border-pink-400 focus:outline-pink-500 dark:border-white"
              />
            </div>

            <button
              type="submit"
              className="border rounded-lg px-3 py-2 w-75 border-pink-400 font-bold bg-pink-500 dark:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}