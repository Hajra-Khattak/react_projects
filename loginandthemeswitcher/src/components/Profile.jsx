import React from 'react'

export default function Profile() {
  return (
    <>
   

 <div className="flex justify-center items-center w-full h-screen bg-gray-100 dark:bg-gray-900   ">

    <div className="bg-white dark:bg-gray-800 rounded shadow-xl rounded-lg w-100 h-110 px-6 ring-gray-900/5">
    <div className="flex flex-col items-center border-b-1 border-pink-400 dark-border-pink-300 pb-4 ">
        <img src="https://images.unsplash.com/vector-1753190326256-1f9c8a7256ee?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-full  w-20 ' />
     <h3 className=' text-2xl font-bold dark:text-white text-pink-700 '>Profile </h3>
    </div>
     <div className="flex flex-col justify-center items-center pt-4 ">
        
            <div className="pb-5 flex flex-col ">
            <label className=' dark:text-white text-pink-600 text-md mb-2'>Your Name</label>
            <input type="text" disabled placeholder='Username' className='disabled dark:text-white dark:focus:outline-white dark:outline-white border-1 rounded-lg px-3 w-75 py-2 border-pink-400 focus:outline-pink-500 outline-pink-500 dark:border-white' />
            </div>

            <div className="pb-5 flex flex-col">
            <label className=' dark:text-white text-pink-600 text-md mb-2'>Your Password</label>
            <input type="text" disabled placeholder='Password' className='dark:text-white dark:focus:outline-white   dark:outline-white border-1 rounded-lg px-3 py-2 w-75 border-pink-400 outline-pink-500 dark:border-white outline-offset-0  focus:outline-pink-500 ' />
            </div>
            
            <button className='dark:text-white dark:focus:outline-white dark:outline-white border-1 rounded-lg px-3 py-2 w-75 border-pink-400 outline-pink-500 dark:border-pink-500 font-bold outline-offset-0  focus:outline-pink-500 bg-pink-500  ' >Go Back to Login</button>


        </div>
    </div>
    </div>
    
    
    </>
  )
}
