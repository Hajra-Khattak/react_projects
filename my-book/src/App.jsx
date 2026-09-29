import { useState } from 'react'
import './App.css'
import MyBook from './components/Book'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=" container overflow-hidden flex justify-center items-center   ">
        <MyBook/>
        
      </div>
    </>
  )
}

export default App
