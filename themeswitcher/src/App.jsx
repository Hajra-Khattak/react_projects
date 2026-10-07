import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const darkTheme = () =>{
    setthemeMode("dark")
  }

  //  name lightTheme should be same as in Themeprovider value
  const lightTheme = () =>{
    setthemeMode("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  // actual change in Theme 

  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme }}>
      <h1 className='text-center text-pink-500 text-5xl font-black'>Code With Khattak</h1>


      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme button Component */}
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card Compenent */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

    </>
  )
}

export default App
