import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container flex justify-center items-center w-full bg-zinc-500 ">
      <div className="p-3 h-screen w-full ">
      <Addtodo/>
      <Todo/>
      </div>
      </div>
    </>
  )
}

export default App
