import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/home/home";
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import WeatherForcast from './pages/weather-forecast/weather-forcast';
import Profile from './pages/profile/profile';

import Header from './components/header/header';

import { UserContextProvider } from './contexts/UserContext';

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/weather-forcast' element={<WeatherForcast />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App;