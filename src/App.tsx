import React from 'react';
import logo from './logo.svg';
import Cover from './Components/Cover/Cover';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Cover/>}/>
          <Route path="/login" element={<Login title="Đăng nhập" Password="Mật khẩu" btn="Đăng nhập"/>}/>
          <Route path="/login-forget" element={<Login title="Cấp lại mật khẩu" 
          Password="Mã xác thực" btn="Cấp lại mật khẩu"/>}/>
        
        </Routes>
    </div>
  );
}

export default App;
