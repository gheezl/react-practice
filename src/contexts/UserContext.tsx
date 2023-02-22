import {createContext, useState, useContext} from 'react';

export interface UserContextInterface {
    user: string,
    setUser: any
}

export const UserContext = createContext<UserContextInterface>({user: "", setUser: null});

export const UserContextProvider = ({children}: any) => {
    const [user, setUser] = useState("");

    const signUp = () => {
        // will add firebase sign up through here
    }

    const signIn = () => {
        // will add firebase sign in through here
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)