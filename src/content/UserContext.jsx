import {createContext, useEffect, useState} from "react"

export const UserContext = createContext(null)

//Opret userContext proveren - Tager imod children fordi den "wrapper" hele vores map
export const UserContextProvider = ({children}) => {

    //state til at holde styr på brugeren
    const [user, setUser] = useState(null)

    useEffect(()  => {

        if (user) {
            localStorage.setItem('user',JSON.stringify(user))
        }

        else if (localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        // console.log("use has changed - yay", user)
    }, [user])

    return (
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )
    



}