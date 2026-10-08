import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative w-full">
      <ThemeToggle/>
     <Login/>
     {/* <Profile/> */}
</div>
    </>
  )
}

export default App
