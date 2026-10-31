import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp  from './pages/SignUp/Signup.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router/dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>} />
      <Route  path="login" element={<Login/>} />
      <Route  path="signup" element={<SignUp/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
