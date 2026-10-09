import { createContext, useContext } from "react";
// import useTheme from "../../../themeswitcher/src/context/theme";

export const ThemeContext= createContext({
    themeMode: 'light',
    darkMode:  () => {},
    lightMode:  () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

