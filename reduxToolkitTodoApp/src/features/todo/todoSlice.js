import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid for generating unique id

// store in starting ( initial state)

const initialState = {
    todos: [{id: 1, text: "Hello"}]
}

export const todoSlice = createSlice({
    name: "todo",
    // initialState: { todos: [{id: 1, text: "Hello"}]}
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todo.filter((todo) => {todo.id != action.payload })
        }
    }
})
