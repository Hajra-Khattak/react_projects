import React from 'react'

export default function Login() {
  return (
    <>

    
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 dark:bg-gray-800   ">
    <div className="bg-white dark:bg-gray-800 rounded shadow-xl rounded-lg w-100 h-100  px-6 py-10 ring-gray-900/5">
    <div className="flex flex-col justify-center items-center border-b-1 border-pink-400 dark-border-pink-300 pb-4 ">
     <h3 className='text-2xl font-bold dark:text-white text-pink-700 mt-5'>Login Here</h3>
    </div>
     <div className="flex flex-col justify-center items-center pt-4 h-65  pb-4">
        <form action="">
            <div className="pb-5">
            <input type="text" placeholder='Username' className='dark:text-white dark:focus:outline-white dark:outline-white border-1 rounded-lg px-3 w-75 py-2 border-pink-400 focus:outline-pink-500 outline-pink-500 dark:border-white' />
            </div>

            <div className="pb-5">
            <input type="text" placeholder='Password' className='dark:text-white dark:focus:outline-white   dark:outline-white border-1 rounded-lg px-3 py-2 w-75 border-pink-400 outline-pink-500 dark:border-white outline-offset-0  focus:outline-pink-500 ' />
            </div>
            <button className='dark:text-white dark:focus:outline-white dark:outline-white border-1 rounded-lg px-3 py-2 w-75 border-pink-400 outline-pink-500 dark:border-pink-500 font-bold outline-offset-0  focus:outline-pink-500 bg-pink-500  ' >Submit</button>

        </form>
        </div>
    </div>
    </div>
    
    </>
  )
}
