import {createContext, useEffect, useState} from "react"

export const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState('test')

    useEffect(()  => {
        console.log("use has changed - yay", user)
    }, [user])

    return (
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )
    



}