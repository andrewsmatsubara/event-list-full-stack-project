import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
