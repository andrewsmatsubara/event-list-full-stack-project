import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Registration from './pages/Registration';
import { RegistrationResult } from './pages/RegistrationResult';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/registration/registration-result' element={<RegistrationResult />} />
      </Routes>
    </div>
  );
}

export default App;
