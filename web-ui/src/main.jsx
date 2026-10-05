import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, Route,  createRoutesFromElements} from 'react-router'
import Layout from './Layout.jsx'
import Home from './compenents/Home/home.jsx'
import About from './compenents/About/about.jsx'
import Contact from './compenents/Contact/contact.jsx'
import User from './compenents/User/user.jsx'
import Policy from './compenents/Policy/policy.jsx'
import Github, { githubInfoLoader } from './compenents/Github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {path: '',
//     element: <Home/>,
//   }, {
//     path: 'about',
//     element: <About/>,
//   },
//   {
//     path: 'contact',
//     element: <Contact/>
//   }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} /> 
        <Route path='about/policy' element={<Policy/>} />
        
      
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userid' element={<User/> } />
        {/* Router 
        1: Path
        2: Elements
        3: Loader
         */}

         {/* Loader = {({request}) => 
          fetch("api/dashboard")} */}
          {/* Loader={methodcall} */}
        <Route 
        loader={githubInfoLoader}
        path='github'
         element={<Github/> }
          />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   {/* <App /> */}
  
  </StrictMode>,
)
