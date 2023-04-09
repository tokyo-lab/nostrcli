import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Relays from './pages/Relays';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/relays' element={<Relays />} />
        <Route path='/nothing' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
