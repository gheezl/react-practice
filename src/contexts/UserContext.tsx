import {createContext, useState, useContext} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from '../api-services/firebase/config';

// needed interfaces for the user
export interface User {
    name: string | null,
    email: string | null,
    location: string | null,
    isLoggedIn: boolean,
    usesMetric: boolean
    otherLocations: string[]
}

export interface UserContextInterface {
    user: User | null,
    signIn: any,
    signUp: any,
    logOut: any
}

const UserContext = createContext<UserContextInterface>({user: null, signIn: null, signUp: null, logOut: null});

// context creation and provider

export const UserContextProvider = ({children}: any) => {
    const [user, setUser] = useState<User>({
        name: '', 
        email: '', 
        location: '', 
        isLoggedIn: false, 
        usesMetric: true,
        otherLocations: []
    });

    // firebase auth interactions
    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user);
                setUser({
                    name: user.user.email,
                    email: user.user.email,
                    location: "",
                    isLoggedIn: true,
                    usesMetric: false,
                    otherLocations: []
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out");
                setUser({
                    name: null,
                    email: null,
                    location: null,
                    isLoggedIn: false,
                    usesMetric: false,
                    otherLocations: []
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // will put functions to update user data here

    return (
        <UserContext.Provider value={{user, signIn, signUp, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)