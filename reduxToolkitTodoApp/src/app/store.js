import {configureStore} from '@reduxjs/toolkit'

import todoReducer from  '../features/todo/todoSlice'
export const Store = configureStore({
    reducer: todoReducer
})


// Step 1: import { configureStore } from '@reduxjs/toolkit'
// export Store