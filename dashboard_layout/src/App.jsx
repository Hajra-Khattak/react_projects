import React from 'react'

import Home from './pages/Home'
import Sidemenu from './Sidemenu'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Sidemenu/>}></Route>
      <Route path="/home" exact element={<Home/>}></Route>
      <Route path="/settings" exact element={<Settings/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
