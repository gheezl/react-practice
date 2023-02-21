import {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({children}: any) => {
    const [user, setUser] = useState({})
    
    return (
        <GlobalContext.Provider value={{user, setUser}}>{children}</GlobalContext.Provider>
    )
}