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
          <Route path="/login" element={<Login title="Đăng nhập" underpass="Quên mật khẩu?"
          Password="Mật khẩu" btn="Đăng nhập"/>}/>
          <Route path="/login-forget" element={<Login title="Cấp lại mật khẩu" 
          underpass="< Quay lại trang chủ"
          Password="Mã xác thực" btn="Cấp lại mật khẩu"/>}/>
          <Route path="/s" element={<Spinning/>}/>
          <Route path="/menu-QLHP-DSLH" element={<><Menu/><DSLH/></>}/>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
