import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

 function github() {
    
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hajra-khattak')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
        <h1 className="pt-3 text-center text-5xl font-bold text-gray-600">
            Github Page
        </h1>
    <div className=' py-5'>
    <div className=' text-pink-600 py-3 font-bold text-center text-xl' >Github Followers : {data.followers}</div>
    <div className="flex justify-center items-center">

    <img className='' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    </div>
    <div>
        <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://images.unsplash.com/vector-1741240041552-237362a08363?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
    </div>
    </>
  )
}

export default github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hajra-khattak')
    return response.json()
}