import React from 'react'
import './Login.scss'
import edu from '../static file/EduIcon.jpg'
import loginbtn from '../static file/Loginbutton.jpg'
import loginicon1 from '../static file/loginicon1.jpg'
import loginicon2 from '../static file/loginicon2.png'
function Login() {
    return (
        <div className="LoginCover">
            <img className="edu" src={edu} alt="edu"/>
            <div className="LoginPage">
                <h1>Đăng nhập</h1>
                <div className="LoginInput">
                    <p>Tên đăng nhập</p>
                   <div >
                        <img className="loginicon1" src={loginicon1} alt="login"/>
                        <input/>
                   </div>
                </div>
                <div className="LoginInput">
                    <p>Mật khẩu</p>
                    <div >
                        <img 
                        className="loginicon2" src={loginicon2} alt="login"/>
                        <input type="password" />
                   </div>
                </div>
                <img src={loginbtn} className="loginbtn" alt="login"/>
            </div>
        </div>
    )
}

export default Login
