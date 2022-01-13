import Spinning from './Components/Else/Spinning';
import Cover from './Components/Cover/Cover';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import { Provider } from 'react-redux';
import {store} from './Components/Redux/Store'
import DSLH from './Components/Menu/Menu Components/QLHP/DSLH';
import CCLP from './Components/Menu/Menu Components/QLHP/CCLP';
import CTHV from './Components/Menu/Menu Components/QLHP/CTHV';
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
          <Route path="/cclp"
           element={<><Menu/><CTHV/></>}/>

          

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
          <Route path="/QLHP-Danh%20s%C3%A1ch%20gi%C3%A1o%20vi%C3%AAn"
           element={<><Menu/></>}/>
          <Route path="/QLHP-Danh%20s%C3%A1ch%20b%E1%BA%A3ng%20ch%E1%BA%A5m%20c%C3%B4ng"
           element={<><Menu/></>}/>
           <Route path="/QLHP-Danh%20s%C3%A1ch%20b%E1%BA%A3ng%20l%C6%B0%C6%A1ng"
           element={<><Menu/></>}/>
          <Route path="/QLHP-QLL-Danh%20s%C3%A1ch%20bi%E1%BB%83u%20ph%C3%AD"
           element={<><Menu/></>}/>
           <Route path="/QLHP-Danh%20s%C3%A1ch%20kho%E1%BA%A3n%20chi"
           element={<><Menu/></>}/>
            <Route path="/QLHP-Thi%E1%BA%BFt%20l%E1%BA%ADp%20ng%E1%BA%A1ch,%20h%E1%BA%A1ng"
           element={<><Menu/></>}/>
            <Route path="/QLHP-C%C3%B4ng%20th%E1%BB%A9c%20t%C3%ADnh%20l%C6%B0%C6%A1ng"
           element={<><Menu/></>}/>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
