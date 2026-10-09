import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import { Route } from 'react-router-dom'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const darkMode = () =>{
    setthemeMode("dark")
  }
  const lightMode = () =>{
    setthemeMode("light")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark")
      document.querySelector("html").classList.add(themeMode)
    
  }, [themeMode])


  return (
    <>
    <ThemeProvider value={{themeMode, darkMode, lightMode }}> 
    <div className="relative w-full">
     
      <ThemeToggle/>
     <Login/>
     {/* <Profile/> */}
</div>
  </ThemeProvider>
    </>
  )
}

export default App
