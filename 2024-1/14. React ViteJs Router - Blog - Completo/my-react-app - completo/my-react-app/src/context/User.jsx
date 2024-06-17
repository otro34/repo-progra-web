import { createContext, useContext, useState, useMemo } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState({ usuario: null, password: null })

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)