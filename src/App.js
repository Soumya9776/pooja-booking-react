
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import Login from './login';
import BramhinRegister from './Body/BramhinRegister';
// import BramhinRegister from './Body/BramhinRegister';
import Body from './Body/body';
// import Body from '../src/Body';
// import Login from './login';
// import Register from './Register';
import Header from './header';

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     {/* <Register/> */}
     {/* <Login/> */}
     {/* <Body/> */}
     {/* <BramhinRegister/> */}

     
     <Link to="/">Login Here</Link>
     
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/BramhinRegister' element={<BramhinRegister/>}></Route>
      <Route path='/Body' element={<Body/>}></Route>
     </Routes>

     <Link to="/BramhinRegister">New User Register</Link>
    </div>
  );
}

export default App;
