import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
