import React from 'react'
import { useParams } from 'react-router'

export default function user() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white py-3 font-bold text-center text-xl' >User : {userid}</div>
  )
}
