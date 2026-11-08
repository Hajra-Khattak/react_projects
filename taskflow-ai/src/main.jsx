import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/Signup.jsx'
import NotFound from './pages/NotFound.jsx'
// import Dashboard from './pages/Dashboard.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider  } from "./context/AuthContext.jsx";
import AddTask from './pages/Habit/AddTask.jsx'
import DashboardHome from './pages/Dashboard/DashboardHome.jsx'
import DashboardLayout from './pages/Dashboard/DashboardLayout.jsx'
import TaskPage from './pages/Dashboard/TasksPage.jsx'
import HabitsPage from './pages/Dashboard/HabitsPage.jsx'
import StatsPage from './pages/Dashboard/StatsPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { TimeZoneProvider } from './context/TimeZoneContext.jsx'
import './services/firebase'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >

      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='dashboard' element={<DashboardLayout />} /> */}
        <Route path='habits' element={<AddTask />} />
        <Route path='habits' element={<AddTask />} />
      </Route>
      <Route element={<ProtectedRoute />}>
      <Route path='dashboard'  element={<DashboardLayout/>}>
        <Route index element={<DashboardHome/>} />
        <Route path="tasks" element={<TaskPage/>} />
        <Route path="habits" element={<HabitsPage />} />
        <Route path="stats" element={<StatsPage />} />
</Route>
      </Route> 
      
     

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
<TimeZoneProvider>

      <RouterProvider router={router} />
</TimeZoneProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
