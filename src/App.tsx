import Spinning from './Components/Else/Spinning';
import Cover from './Components/Cover/Cover';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import { Provider } from 'react-redux';
import {store} from './Components/Redux/Store'
import DSLH from './Components/Menu/Menu Components/QLHP/DSLH';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Routes>
          <Route path="/" element={<Cover/>}/>
          <Route path="/login" element={<Login title="Đăng nhập" 
          underpass="Quên mật khẩu?"
          Password="Mật khẩu" btn="Đăng nhập"/>}/>
          <Route path="/login-forget" element={<Login title="Cấp lại mật khẩu" 
          underpass="< Quay lại trang chủ"
          Password="Mã xác thực" btn="Cấp lại mật khẩu"/>}/>
          <Route path="/s" element={<Spinning/>}/>
          <Route path="/QLHP-Danh%20s%C3%A1ch%20l%E1%BB%9Bp%20h%E1%BB%8Dc"
           element={<><Menu/><DSLH/></>}/>
          <Route path="/QLHP-Danh%20s%C3%A1ch%20bi%E1%BB%83u%20ph%C3%AD"
           element={<><Menu/></>}/>
           <Route path="/QLHP-Danh%20s%C3%A1ch%20kho%E1%BA%A3n%20thu"
           element={<><Menu/></>}/>
           <Route path="/QLHP-H%C3%ACnh%20th%E1%BB%A9c%20thu"
           element={<><Menu/></>}/>
           <Route path="/QLHP-Danh%20s%C3%A1ch%20ch%E1%BA%BF%20%C4%91%E1%BB%99%20mi%E1%BB%85n%20gi%E1%BA%A3m"
           element={<><Menu/></>}/>
           <Route path="/QLHP-Thu%20h%E1%BB%8Dc%20ph%C3%AD"
           element={<><Menu/></>}/>
          
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
