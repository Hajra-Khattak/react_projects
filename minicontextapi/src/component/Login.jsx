import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <>
    <h2>Login</h2>

<div className="flex justify-center flex-col  items-center">

    <input className='border rounded px-3 py-2 border-pink-500 text-pink-500 focus:outline focus:outline-pink-900 my-2 bg-white-400' type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username"  />
    <input  className='border rounded px-3 py-2 border-pink-500 text-pink-500 focus:outline focus:outline-pink-900 my-2 bg-white-400' type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"  />
    <button className='border border-pink-700 bg-pink-600 px-4 py-2 rounded' onClick={handlesubmit}>Submit</button>
</div>
    </>
  )
}
