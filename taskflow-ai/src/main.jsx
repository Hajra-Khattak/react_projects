import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp  from './pages/SignUp/Signup.jsx'
import NotFound from './pages/NotFound.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from "./context/ThemeContext";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      
      <Route element={<Layout/>}>
      <Route  index element={<Home/>} />
      <Route  path='*' element={<NotFound/>} />
      <Route  path='dashboard' element={<Dashboard/>} />
      </Route>

      <Route  path="login" element={<Login/>} />
      <Route  path="signup" element={<SignUp/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>

<RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
