import { createContext, useContext } from "react";

export const toDoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "To do msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateToDo: (id, todo) => {},
    deletedToDo: (id) => {},
    toggleComplete: (id) => {}

}
)

export const useToDo = () => {
    return useContext(toDoContext)
}

export const ToDoProvider = toDoContext.Provider