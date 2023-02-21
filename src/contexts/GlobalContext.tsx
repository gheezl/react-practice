import {createContext, useState, useContext} from 'react';

export const GlobalContext = createContext({});
export const TpdateGlobalStateContext = createContext({});

export const GlobalContextProvider = ({children}: any) => {
    const [user, setUser] = useState({});

    return (
        <GlobalContext.Provider value={{user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)