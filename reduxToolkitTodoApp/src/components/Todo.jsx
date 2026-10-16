import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

export default function Todo() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>

    <h2 className='text-3xl font-bold text-pink-700 pt-4 '>Todo List</h2>
    <ul className='list-none'>
      {todos.map((todo) => (
      <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
        <div className='text-white'>{todo.text}</div>
        <button className='text-white bg-red-800 border-0 py-1 focus:outline-none hover:bg-red-600 rounded text-md' onClick={()=> dispatch(removeTodo(todo.id))}>
        
<svg xmlns="http://www.w3.org/2000/svg"
     width="24" height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round">
  <path d="M18 6L6 18M6 6l12 12"/>
</svg>


        </button>

      </li>


     ))}
      </ul>


    {/* {todos.map((todo) =>(
      <li key={todo.id}> 
      {todo.text}

      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
      </li>
    ))} */}
    
    
    </>




    ) }

