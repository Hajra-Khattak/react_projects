import { createContext, useContext } from "react";
// createContext & useContext must 

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {}, 
    lightTheme: () => {}, 
})

export const ThemeProvider = ThemeContext.Provider

// custom hook 
//  use is a keyword 
export default function useTheme(){
    return useContext(ThemeContext)
}