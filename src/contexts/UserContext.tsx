import {createContext, useState, useContext} from 'react';

// needed interfaces for the user
export interface User {
    name: string,
    email: string,
    location: string,
    isLoggedIn: boolean,
    usesMetric: boolean
}

export interface UserContextInterface {
    user: User,
    setUser: any
}

// context construction and provider

export const UserContext = createContext<UserContextInterface>({user: {name: '', email: '', location: '', isLoggedIn: false, usesMetric: false}, setUser: null});

export const UserContextProvider = ({children}: any) => {
    const [user, setUser] = useState<User>({name: '', email: '', location: '', isLoggedIn: false, usesMetric: false});

    // these functions will be passed down through the provider and will update the user state when changes are made
    const signUp = () => {
        // will add firebase sign up through here
    }

    const signIn = () => {
        // will add firebase sign in through here
    }

    const signOut = () => {
        // will add firebase sign out through here
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)