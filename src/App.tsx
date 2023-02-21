import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/home/home";
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

import Header from './components/header/header';

import { GlobalContextProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App;
