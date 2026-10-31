import React, {useState} from 'react'
// import { Link, NavLink } from 'react-router-dom'


export default function Header() {
   
  return (
   <>
     {/* <div className="flex flex-col"> */}

      {/* Header */}
      
      <header className="bg-gray-900 text-white px-8 py-5">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            MyWebsite
          </h1>

          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    {/* </div> */}
   
   </>
  )
}
