import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Registration from './pages/Registration';
import { RegistrationResult } from './pages/RegistrationResult';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/registration/registration-result' element={<RegistrationResult />} />
      </Routes>
    </div>
  );
}

export default App;
