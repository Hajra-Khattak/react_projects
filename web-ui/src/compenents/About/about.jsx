import React from 'react'
import { Outlet, Link } from 'react-router'

export default function about() {
  return (
    <div>
        <h1 className="pt-3 text-center text-5xl font-bold text-gray-600">
            About Page
        </h1>
        {/* <Link to="policy">Policy</Link>
         <Outlet /> */}
        <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://images.unsplash.com/vector-1741240041552-237362a08363?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
    </div>
  )
}
