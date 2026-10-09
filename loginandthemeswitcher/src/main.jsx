import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import { UserContextProvider } from './context/UserContext'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
)