import './App.css';
import { NavBar, Register, Login } from './components';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';


function App() {
  const [user, setUser] = useState(false);
  const verifyLogin = (value) => {
    setUser(value)
  }
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login verifyLogin={verifyLogin} />} />
      </Routes>
    </>
  );
}

export default App;
