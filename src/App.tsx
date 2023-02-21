import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/home/home";
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

import Header from './components/header/header';

import { GlobalContext } from './contexts/GlobalContext';

const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{user: {}}}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      
    </>
  )
}

export default App;
