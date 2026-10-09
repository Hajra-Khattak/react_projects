import { createContext, useContext, useState } from 'react'

export const UserContext = createContext(null)

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (username, password) => setUser({ username, password })
  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used inside UserContextProvider')
  }
  return context
}