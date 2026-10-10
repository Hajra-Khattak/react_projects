import { createContext, useContext } from "react";

export const toDoContext = createContext({

    todos: [
        {
            id: 1,
            todoTitle: "To do msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateToDo: (id, todoTitle) => {},
    deletedToDo: (id) => {},
    toggleComplete: (id) => {}

}
)

export const useToDo = () => {
    return useContext(toDoContext)
}

export const toDoProvider = toDoContext.Provider