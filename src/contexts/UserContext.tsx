import {createContext, useState, useContext} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../api-services/firebase/config';

// needed interfaces for the user
export interface User {
    name: string,
    email: string,
    location: string,
    isLoggedIn: boolean,
    usesMetric: boolean
}

export interface UserContextInterface {
    user: User | null,
    signIn: Object | null,
    signUp: any,
    signOut: Object | null
}

// context creation and provider

export const UserContext = createContext<UserContextInterface>({user: null, signIn: null, signUp: null, signOut: null});

export const UserContextProvider = ({children}: any) => {
    const [user, setUser] = useState<User>({
        name: '', 
        email: '', 
        location: '', 
        isLoggedIn: false, 
        usesMetric: false
    });


    // these functions will be passed down through the provider and will update the user state when changes are made
    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user);
            })
        // will add firebase sign in through here
    }

    const signUp = (email: string, password: string) => {
        // will add firebase sign up through here
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const signOut = () => {
        // will add firebase sign out through here
    }

    return (
        <UserContext.Provider value={{user, signIn, signUp, signOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)