import './App.css';
import Login from './Components/pages/Login'
import { Routes, Route } from 'react-router-dom';
import Register from './Components/pages/Register'
import Nav from './Components/NavigationBar';
import Home from './Components/pages/Home'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </>
  )
}

export default App;
