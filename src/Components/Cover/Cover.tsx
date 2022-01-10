import React from 'react'
import './Cover.scss'
import PC from '../static file/PC.jpg'
import logo from '../static file/Logo.jpg'
import { useNavigate } from 'react-router-dom'
function Cover() {
    const navi = useNavigate()
    const Login = ()=>{
        navi('/login')
    }
    return (
        <div className="cover">
           <div className="cover-context-left">
                <div className="LMS">
                        <h1 className="LMStext">
                            LMS - Learning<br/> Management System
                        </h1>
                        <button onClick={Login}
                        className="E-finance"
                        >E-Finance</button>
                </div>
                <p>
                    Hệ thống giáo dục được phát triển bởi
                </p>
                <img className="logo" src={logo} alt='logo'/>
           </div>
           <div className="cover-context-right">
                <img className="pc" src={PC} alt='pc'/>
                <h1 className="el"></h1>
            <p> 
                Designed by UI/UX Team of Alta Media
            </p>
            
           </div>
        </div>
    )
}

export default Cover
