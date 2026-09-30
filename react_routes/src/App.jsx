import { useState } from 'react'
import './App.css'
import Header from './compenents/Header/header'
import Home from './compenents/Home/home'
import Footer from './compenents/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
      <Home/>
      <Footer/>
    </>
  )
}

export default App
