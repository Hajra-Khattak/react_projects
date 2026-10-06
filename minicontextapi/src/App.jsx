import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1 className='text-pink-700'>User Contex Compenent</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
